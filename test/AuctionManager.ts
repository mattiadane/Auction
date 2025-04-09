import { network, ethers } from "hardhat";
import { expect } from "chai";

// Test del contratto AuctionManager
describe("Auction Manager contract", function () {
  let auctionManager: any;
  let auction: any;
  let owner: any;

  beforeEach(async function () {
    // Ottieni i firmatari
    [owner] = await ethers.getSigners();

    // Distribuisci AuctionManager
    const AuctionManager = await ethers.getContractFactory("AuctionManager");
    auctionManager = await AuctionManager.deploy();

    // Distribuisci Auction
    const Auction = await ethers.getContractFactory("Auction");
    auction = await Auction.deploy(300); // Imposta durata asta
  });

  // Test per verificare che l'evento AuctionCreated venga emesso correttamente
  it("Should emit AuctionCreated event", async function () {
    await expect(auctionManager.AddAuction(auction))
      .to.emit(auctionManager, "AuctionCreated")
      .withArgs(auction, owner.address);
  });

  // Test per verificare che l'asta venga aggiunta correttamente
  it("Should add auction done", async function () {
    await auctionManager.AddAuction(auction);

    expect(await auctionManager.getAuctionCount()).to.eq(1);
  });

  // Test per verificare che il conteggio delle aste sia corretto
  it("Should get auction count", async function () {
    expect(await auctionManager.getAuctionCount()).to.eq(0); // All'inizio il conteggio deve essere 0

    await auctionManager.AddAuction(auction); // Aggiungi un'asta

    expect(await auctionManager.getAuctionCount()).to.eq(1); // Verifica che il conteggio sia aggiornato
  });
});
