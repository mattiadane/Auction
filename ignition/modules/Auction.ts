// Questo script utilizza il modulo Hardhat Ignition per distribuire e configurare i contratti Auction e AuctionManager.
// Configura un'asta con un tempo di offerta specificato e collega l'asta al gestore tramite la funzione AddAuction.

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const biddingTime = 5*60;

export default buildModule("DeployAuction", (m) => {

    const auction = m.contract("Auction",[biddingTime]);

    const auctionManager = m.contract("AuctionManager",[]);

    m.call(auctionManager, "AddAuction", [auction]);

    return { auction, auctionManager };

});
