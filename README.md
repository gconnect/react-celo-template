# React Celo Template
This is a simple template can be used for any React Celo and ContractKit projects. All you need to do is clone the repo and start adding your unique features. With this template you can create and deploy your contract with hardhat and also interact with the contract on the frontend with react. Tailwind css has also been setup. For easy connection to your wallet, the template pre-installs contractkit and react-celo.

- Demo
<img width="1438" alt="Screenshot 2023-03-23 at 01 38 11" src="https://user-images.githubusercontent.com/23031920/227069530-c8501295-c031-4ef7-b9bb-1040fc0bb2b5.png">


# Features
The following features was added out of the box...

- [react-celo](https://github.com/celo-org/react-celo)
- [Tailwind](https://tailwindcss.com/docs)
- [hardhat](https://hardhat.org/docs)

# Available Components
You can modify them to suite your usecase;
- `header.js` - This is the header
- `content.js` - This file will house other components
- `footer.js` - This contains the footer
- `layout.js` -  This file contains the header, content and footer component
- `interact.js` - This files handles all contract interactions on the frontend

# How to Use the Template
- Clone the repo
- On your terminal/command prompt cd to backend on the contract folder add your contract. 
- To deploy the contract cd to script directory and modify the deploy code to suit your use
- To interact with the contract on the frontend cd to the frontend directory. 
- After deploying your contract copy the abi and place it on the root of the frontend folder also copy the contract address
- On the frontend there is `interact.js` this is where all contract interactions will be placed and called when needed in the component.

# Contribtions
Contributions are welcome.

# License
Distributed under the MIT License. See for more information. [LICENSE](https://github.com/gconnect/react-celo-template/blob/main/LICENSE)



