import contractABI from "./Lock.json"
const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");
const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
const kit = ContractKit.newKitFromWeb3(web3);
const contractAddress = "0x3472EbF32A7Eb1bf417faCDE52BFa8C03975da7A";

export const contractInstance = new kit.connection.web3.eth.Contract(contractABI.abi, contractAddress)


// Making a get call
export async function withdrawFund() {
  try {
    const value = await contractInstance.methods.withdraw().call()
    console.log("value", value)
    return value
  } catch (error) {
    console.log(error)
  }
}

// making a set call
// export async function addFund(amount, account) {
//   const txObject = await contractInstance.methods.setName(amount);
//   let tx = await kit.sendTransactionObject(txObject, { from: account.address });
//   let receipt = await tx.waitReceipt();
//   console.log(receipt);
// }