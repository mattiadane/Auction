/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Auction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auction__factory>;
    getContractFactory(
      name: "AuctionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuctionManager__factory>;

    getContractAt(
      name: "Auction",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Auction>;
    getContractAt(
      name: "AuctionManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AuctionManager>;

    deployContract(
      name: "Auction",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Auction>;
    deployContract(
      name: "AuctionManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AuctionManager>;

    deployContract(
      name: "Auction",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Auction>;
    deployContract(
      name: "AuctionManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AuctionManager>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
