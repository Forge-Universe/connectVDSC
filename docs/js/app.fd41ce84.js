(function(){var e={7640:function(e,t,n){"use strict";var a=n(9242),i=n(3396);function s(e,t,n,a,s,o){const r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(r)}var o=n(7327),r=n(6520),l=n(2578),p=n(6750),u=n(7365),d=n(8473),y=n(3922),c=n(5851);const m={chainId:11155111,symbol:"ETH (test)",blockExplorer:{name:"Etherscan (Sepolia)",generateContractUrl:e=>`https://sepolia.etherscan.io/address/${e}`,generateTransactionUrl:e=>`https://sepolia.etherscan.io/tx/${e}`}},g={chainId:1,symbol:"ETH",blockExplorer:{name:"Etherscan",generateContractUrl:e=>`https://etherscan.io/address/${e}`,generateTransactionUrl:e=>`https://etherscan.io/tx/${e}`}},A={name:"OpenSea",generateCollectionUrl:(e,t)=>"https://"+(t?"www":"testnets")+".opensea.io/collection/"+e};var b=JSON.parse('["0xC5EBdd487fF97ce2698b69cc09EF0BEfdE476944","0x9542e847696df79129aC4e72f588496cF6268d49","0x807fE6EBA180B07b5E55a7D0557e816d2c47CEf4"]');const I={testnet:m,mainnet:g,contractName:"DragonNFT",tokenName:"DragonNFT",tokenSymbol:"DDB",hiddenMetadataUri:"ipfs://bafkreiaseybgawhjot4qbktsr63grqklalkdxxy2gk4ihrv6mbsfctoojy",maxSupply:2222,whitelistSale:{price:.5,maxMintAmountPerTx:58,whitelistSupply:2222},preSale:{price:.5,maxMintAmountPerTx:1},publicSale:{price:.5,maxMintAmountPerTx:1},contractAddress:"0x203393330560Cf43893Ae7051d1b787844f13080",walletConnectProjectId:"665d687852032cfc7d1c167792f3c74b",marketplaceIdentifier:"deadbirdsofficial",marketplaceConfig:A,whitelistAddresses:b,royaltyReceiver:"0x4af9CA5Fd841D2B04c59cf38290891ceEE9b8981",royaltyNumerator:"1000",treasury:"0xc2E5ba835c571a5f2306C31f961DF73D379eaEFe"};var w=I;const v=[{stateMutability:"nonpayable",type:"constructor",inputs:[{name:"_subscriptionId",internalType:"uint64",type:"uint64"},{name:"_step",internalType:"uint8",type:"uint8"}]},{type:"error",inputs:[{name:"have",internalType:"address",type:"address"},{name:"want",internalType:"address",type:"address"}],name:"OnlyCoordinatorCanFulfill"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"operator",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"bool",type:"bool",indexed:!1}],name:"ApprovalForAll"},{type:"event",anonymous:!1,inputs:[{name:"previousOwner",internalType:"address",type:"address",indexed:!0},{name:"newOwner",internalType:"address",type:"address",indexed:!0}],name:"OwnershipTransferred"},{type:"event",anonymous:!1,inputs:[{name:"role",internalType:"bytes32",type:"bytes32",indexed:!0},{name:"previousAdminRole",internalType:"bytes32",type:"bytes32",indexed:!0},{name:"newAdminRole",internalType:"bytes32",type:"bytes32",indexed:!0}],name:"RoleAdminChanged"},{type:"event",anonymous:!1,inputs:[{name:"role",internalType:"bytes32",type:"bytes32",indexed:!0},{name:"account",internalType:"address",type:"address",indexed:!0},{name:"sender",internalType:"address",type:"address",indexed:!0}],name:"RoleGranted"},{type:"event",anonymous:!1,inputs:[{name:"role",internalType:"bytes32",type:"bytes32",indexed:!0},{name:"account",internalType:"address",type:"address",indexed:!0},{name:"sender",internalType:"address",type:"address",indexed:!0}],name:"RoleRevoked"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Transfer"},{type:"event",anonymous:!1,inputs:[{name:"",internalType:"uint256",type:"uint256",indexed:!1},{name:"",internalType:"address",type:"address",indexed:!1}],name:"newNFTMinted"},{stateMutability:"view",type:"function",inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{name:"",internalType:"bytes32",type:"bytes32"}]},{stateMutability:"view",type:"function",inputs:[],name:"DEVELOPER",outputs:[{name:"",internalType:"bytes32",type:"bytes32"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"baseURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"callbackGasLimit",outputs:[{name:"",internalType:"uint32",type:"uint32"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"getApproved",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"role",internalType:"bytes32",type:"bytes32"}],name:"getRoleAdmin",outputs:[{name:"",internalType:"bytes32",type:"bytes32"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"role",internalType:"bytes32",type:"bytes32"},{name:"account",internalType:"address",type:"address"}],name:"grantRole",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"role",internalType:"bytes32",type:"bytes32"},{name:"account",internalType:"address",type:"address"}],name:"hasRole",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"operator",internalType:"address",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_quantity",internalType:"uint256",type:"uint256"},{name:"_token_id",internalType:"uint256[]",type:"uint256[]"},{name:"_to",internalType:"address",type:"address"}],name:"mintTo",outputs:[]},{stateMutability:"payable",type:"function",inputs:[{name:"_quantity",internalType:"uint256",type:"uint256"},{name:"_merkleProof",internalType:"bytes32[]",type:"bytes32[]"}],name:"mintToken",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"owner",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ownerOf",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"requestId",internalType:"uint256",type:"uint256"},{name:"randomWords",internalType:"uint256[]",type:"uint256[]"}],name:"rawFulfillRandomWords",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"renounceOwnership",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"role",internalType:"bytes32",type:"bytes32"},{name:"account",internalType:"address",type:"address"}],name:"renounceRole",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"role",internalType:"bytes32",type:"bytes32"},{name:"account",internalType:"address",type:"address"}],name:"revokeRole",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"",internalType:"uint256",type:"uint256"},{name:"salePrice",internalType:"uint256",type:"uint256"}],name:"royaltyInfo",outputs:[{name:"receiver",internalType:"address",type:"address"},{name:"royaltyAmount",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"royalty_amount",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"royalty_receiver",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[],name:"s_subscriptionId",outputs:[{name:"",internalType:"uint64",type:"uint64"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"data",internalType:"bytes",type:"bytes"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"payable",type:"function",inputs:[{name:"_amount",internalType:"uint256",type:"uint256"},{name:"_to",internalType:"address payable",type:"address"}],name:"sendEthToAddr",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"approved",internalType:"bool",type:"bool"}],name:"setApprovalForAll",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_newURI",internalType:"string",type:"string"}],name:"setBaseURI",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_limit",internalType:"uint32",type:"uint32"}],name:"setCallbackGasLimit",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_keyhash",internalType:"bytes32",type:"bytes32"}],name:"setKeyHash",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_newRoot",internalType:"bytes32",type:"bytes32"}],name:"setMerkleRoot",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_amount",internalType:"uint256",type:"uint256"}],name:"setRoyaltyAmount",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_addr",internalType:"address",type:"address"}],name:"setRoyaltyReceiver",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_step",internalType:"uint8",type:"uint8"}],name:"setStep",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"_id",internalType:"uint64",type:"uint64"}],name:"setSubscriptionId",outputs:[]},{stateMutability:"view",type:"function",inputs:[],name:"step",outputs:[{name:"",internalType:"uint8",type:"uint8"}]},{stateMutability:"view",type:"function",inputs:[{name:"interfaceId",internalType:"bytes4",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"tokenURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"totalSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"newOwner",internalType:"address",type:"address"}],name:"transferOwnership",outputs:[]}],h={contract:null,initDone:!1,userAddress:null,network:null,networkConfig:w.mainnet,totalSupply:0,maxSupply:0,maxMintAmountPerTx:0,tokenPrice:BigInt(0),isPaused:!0,loading:!1,isWhitelistMintEnabled:!1,isUserInWhitelist:!1,amountAllowed:0,alreadyMintedAmount:0,merkleProofManualAddressStatus:null,errorMessage:null,balanceOfAddress:0},C=w.walletConnectProjectId,{chains:f,publicClient:M,webSocketPublicClient:T}=(0,d.QB)([y.RJ],[(0,c.R)({rpc:()=>({http:"https://eth.llamarpc.com"})})]),k=(0,d._g)({autoConnect:!0,connectors:(0,p.gu)({projectId:C,chains:f}),publicClient:M,webSocketPublicClient:T}),S=new p.J0(k,f),G=new u.E({projectId:C},S),Z={address:w.contractAddress,abi:v};G.subscribeEvents((e=>{const{name:t}=e;"ACCOUNT_CONNECTED"===t&&window.location.reload()}));const W=(0,l.Q_)("Web3",{state:()=>h,actions:{async init(){await this.registerWalletEvents(),this.contract=(0,d.uN)({...Z,walletClient:S}),this.$patch({totalSupply:Number(await this.contract.read.totalSupply([]))}),this.initDone=!0},async registerWalletEvents(){S.watchAccount((({isConnected:e,address:t})=>{console.log("Wallet event",e,t),this.userAddress=e?t:null})),S.watchNetwork((({chain:e})=>{this.network=e?{name:e.name,chainId:e.id}:null}))},setError(e=null){let t="Unknown error...";null===e||"string"===typeof e?t=e:"object"===typeof e&&(e?.details?t=e.details:void 0!==e?.error?.message?t=e.error.message:void 0!==e?.data?.message?t=e.data.message:void 0!==e?.message&&(t=e.message)),this.errorMessage=null===t?null:t.charAt(0).toUpperCase()+t.slice(1)},async connectWallet(){await G.openModal()},async signMessage(e){const t=await(0,d.l)({message:e});return t}},getters:{getUserAddress(){return this.userAddress},isWalletConnected(){return!!this.userAddress},isContractReady(){return void 0!==this.contract&&this.initDone},isSoldOut(){return 0!==this.maxSupply&&this.totalSupply>=this.maxSupply},isNotMainnet(){return null!==this.network&&this.network.chainId!==w.mainnet.chainId},generateContractUrl(){return this.networkConfig.blockExplorer.generateContractUrl(w.contractAddress)},generateMarketplaceUrl(){return w.marketplaceConfig.generateCollectionUrl(w.marketplaceIdentifier,!this.isNotMainnet)},generateTransactionUrl(e){return t=>e.networkConfig.blockExplorer.generateTransactionUrl(t)},marketPlaceName(){return w.marketplaceConfig.name}}});class D extends r.w3{constructor(...e){super(...e),(0,o.Z)(this,"Web3",W())}mounted(){this.Web3.init()}}var U=n(89);const j=(0,U.Z)(D,[["render",s]]);var N=j,R=n(2483),L=n(4870),B=n(7139),E=n.p+"img/logo-vdsc.57ff448d.webp",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAFPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMzAiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyNCIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB0aWZmOkltYWdlTGVuZ3RoPSIyNCIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOC0wMVQxMDowOToxNyswNzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDgtMDFUMTA6MDk6MTcrMDc6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgeG1wTU06YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgeG1wTU06c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC41IgogICAgICB4bXBNTTp3aGVuPSIyMDIzLTA3LTI3VDEyOjEzOjE3KzA3OjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InByb2R1Y2VkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBQaG90byAxLjEwLjUiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDgtMDFUMTA6MDk6MTcrMDc6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/PiMWHE4AAAGCaUNDUHNSR0IgSUVDNjE5NjYtMi4xAAAokXWR3yuDURjHP9toYpriwoWyNK5MG7W4USaNkjRTft1s736p/Xh73y3JrXKrKHHj1wV/AbfKtVJESm65Jm5Yr+fdVluaczrP8+l7zvN0zveANZxWMnqDFzLZvBYKBlwLi0su+yt2umlmAHdE0dWx2dlp/h1fD1jMfOcxe/1/ru5oicV1BSxNwqOKquWFJ4Wn1/KqybvCHUoqEhM+F+7X5ILC96YeLfObycky/5ishUPjYG0TdiVrOFrDSkrLCMvLcWfSBaVyH/Mljnh2fk5yj6wudEIECeBiignG8eNjRKIfD4PikE+8q1/vLdXPkJNaRaLKOhqrJEmRp1/UgnSPS06IHpeZZt30/6+vemJosNzdEYDGF8P46AX7DhS3DeP72DCKJ2B7hqtstT53BMOfom9XNfchODfh4rqqRffgcgs6n9SIFilJNlnWRALez6B1EdpvoXm57Flln9NHCG/IV93A/gH0yXnnyi+YOWf8Ax3ykAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlpJREFUSInFls1LVFEYxn/HJrGyD4sCKXFXZFGEUJQrQ4RW1SJaWC1ctu8fsF20aBMEBfZBQVC0q0WbIoxCiAILwUpKQoUoCywNnV+Lc6euM850JwUfOJv3vrzP+3Wec2GJEBYaQF0GbAe6gFZgBTAM3AfuhBBmEr/1QBPwNoQwmQ7QrJ5KHLKS5tQudVz9pc6qeXVG/aneVfeop9Xnao+aKw5yTB1Wz6mrMxK3mQ3T6k11XSF2TSpOI7AKOANcUJvU5RVIa4HLWfIDPgFfgR5gazFxGt3AbeBokkBuHp8dxNn+C4FY1H7gBfByblraqQ4Wteibek09oe5SG9SalH9WvFfb03zpSvqBPqAZqEtsa4CTwCHgFfAGGFJHgc0ZqoXY6jHgUQlxUkU9cIu48u2ppAKwEehI7N+J88p6FQWmio251McjwEHi3PNlgiwDGpKTFQKjIQRLiEMIqh+BFmLFZbf5PzALDBQb01v9kKg4dSyCoqUwAzyu6KHuVF8bVShfxdZWwgejrJatmBDCAHAY6AXGifNZKC6GEGYrEhf4ies/sgikI8CVTJ5qi9q/CC2eUrurSlPtUPsWSHxdXVF1j9R96ln1nvrO6pbtgbpDrf52qEFda9TkviqIH6oHnP9hKSGpSWen1qvt6qWk2skMhNPqHbXVCs9pAYWsGoHjaiewAdhCfCBqmfuQlMMocB64CkyEEMpJbgnxGPAE2AbsTkhzxKuV56+SmZw8UZEmgBtAbwhhMEOCf1AyfHUlsBdoI2r3JuKfSQB+AJ+BIeAZ8DSE8KUawiXHb16F/SHrvyW3AAAAAElFTkSuQmCC",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAFPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMzAiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyNiIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB0aWZmOkltYWdlTGVuZ3RoPSIyNiIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0w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",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAFPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjgiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyOCIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB0aWZmOkltYWdlTGVuZ3RoPSIyOCIKICAgdGlmZjpJbWFnZVdpZHRoPSIyOCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0w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";const V={className:"collection-status"},O={className:"user-address"},H=(0,i._)("span",{className:"label"},"Wallet address:",-1),F={className:"address"};function Y(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("div",O,[H,(0,i._)("span",F,(0,B.zw)(e.Web3.userAddress),1)])])}class J extends r.w3{constructor(...e){super(...e),(0,o.Z)(this,"Web3",W())}}const K=(0,U.Z)(J,[["render",Y]]);var X=K,q=(n(7658),n(4161)),Q=n(672);const _={email:null,userId:null,gToken:null,wlToken:null,wallets:[],loading:!1},$=q.Z.create({baseURL:"https://lootlocker-h3tqkyoygq-uc.a.run.app"});let ee=null;const te=(0,l.Q_)("LootLocker",{state:()=>_,actions:{async login(e,t){if(!this.loading){this.loading=!0;try{const{gToken:n,wlToken:a,userId:i}=(await $.post("/login",{email:e,password:t})).data;this.gToken=n,this.wlToken=a,this.userId=i,this.email=e}catch(n){return void this.handleAxiosError(n)}ee=q.Z.create({baseURL:"https://lootlocker-h3tqkyoygq-uc.a.run.app",headers:{"x-session-token":this.gToken,"wl-token":this.wlToken,email:this.email}}),this.initStorage(),this.loading=!1}},logout(){this.gToken=null,this.wlToken=null,this.userId=null,this.email=null},async initStorage(){if(ee)try{const{wallets:e}=(await ee.get("/get-wallets")).data;this.wallets=e||[]}catch(e){this.handleAxiosError(e)}},async signup(e,t){if(!this.loading){this.loading=!0;try{await $.post("/signup",{email:e,password:t}),Q.Am.success("Account registered successfully!",{dangerouslyHTMLString:!0,position:"bottom-center"})}catch(n){this.handleAxiosError(n)}this.loading=!1}},async resetPassword(e){if(!this.loading){this.loading=!0;try{await $.post("/reset-password",{email:e}),Q.Am.success("Email sent! Check it to change your password!",{dangerouslyHTMLString:!0,position:"bottom-center"})}catch(t){return void this.handleAxiosError(t)}this.loading=!1}},async addWallet(e){if(ee&&!this.loading){this.loading=!0,console.log("ADD WALLET!",e);try{await ee.post("/add-wallet",{wallet:e}),this.wallets.push(e),Q.Am.success("Wallet added successfully!",{dangerouslyHTMLString:!0,position:"bottom-center"})}catch(t){return void this.handleAxiosError(t)}this.loading=!1}},async removeWallet(e){if(!ee||this.loading)return;let t;if(-1!==(t=this.wallets.indexOf(e))){this.loading=!0;try{await ee.post("/remove-wallet",{wallet:e})}catch(n){return void this.handleAxiosError(n)}this.wallets.splice(t,1),Q.Am.success("Wallet removed successfully!",{dangerouslyHTMLString:!0,position:"bottom-center"})}this.loading=!1},handleAxiosError(e){if(e.response){const t=e.response.data.msg;console.log("Error message: ",t),Q.Am.error(t,{dangerouslyHTMLString:!0,position:"bottom-center"})}else e.request?console.log(e.request):console.log("Error",e.message);this.loading=!1}},getters:{isLogged(){return!!this.gToken&&!!this.wlToken}}}),ne=e=>((0,i.dD)("data-v-83d5c808"),e=e(),(0,i.Cn)(),e),ae=ne((()=>(0,i._)("h2",null,"Login to your game account",-1))),ie=["onSubmit"],se=["disabled"],oe=["onSubmit"],re=["disabled"],le=["onSubmit"],pe=["disabled"];var ue=(0,i.aZ)({__name:"LootLockerForm",setup(e){const t=(0,L.qj)({step:0,email:"",password:""}),n=te(),s=async()=>{n.login(t.email,t.password)},o=async()=>{await n.signup(t.email,t.password),t.step=0},r=async()=>{n.resetPassword(t.email)};return(e,l)=>((0,i.wg)(),(0,i.iD)("div",null,[ae,0===t.step?((0,i.wg)(),(0,i.iD)("form",{key:0,onSubmit:(0,a.iM)(s,["prevent"])},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>t.email=e),placeholder:"Write your Email"},null,512),[[a.nr,t.email,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=e=>t.password=e),placeholder:"Password"},null,512),[[a.nr,t.password,void 0,{trim:!0}]]),(0,i._)("button",{disabled:(0,L.SU)(n).loading,type:"submit"},"Login",8,se),(0,i._)("button",{class:"register",onClick:l[2]||(l[2]=e=>t.step=1)},"Register"),(0,i._)("button",{class:"recoverPassword",onClick:l[3]||(l[3]=e=>t.step=2)},"Recover Password")],40,ie)):(0,i.kq)("",!0),1===t.step?((0,i.wg)(),(0,i.iD)("form",{key:1,onSubmit:(0,a.iM)(o,["prevent"])},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=e=>t.email=e),placeholder:"Write Email Here"},null,512),[[a.nr,t.email,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":l[5]||(l[5]=e=>t.password=e),placeholder:"Password"},null,512),[[a.nr,t.password,void 0,{trim:!0}]]),(0,i._)("button",{disabled:(0,L.SU)(n).loading||!t.email||!t.password,type:"submit"},"Signup",8,re),(0,i._)("button",{onClick:l[6]||(l[6]=e=>t.step=0)},"Go Back")],40,oe)):(0,i.kq)("",!0),2===t.step?((0,i.wg)(),(0,i.iD)("form",{key:2,onSubmit:(0,a.iM)(r,["prevent"])},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":l[7]||(l[7]=e=>t.email=e),placeholder:"Write Email Here"},null,512),[[a.nr,t.email,void 0,{trim:!0}]]),(0,i._)("button",{disabled:(0,L.SU)(n).loading,type:"submit"},"Reset",8,pe),(0,i._)("button",{onClick:l[8]||(l[8]=e=>t.step=0)},"Go Back")],40,le)):(0,i.kq)("",!0)]))}});const de=(0,U.Z)(ue,[["__scopeId","data-v-83d5c808"]]);var ye=de;const ce=["disabled"],me={class:"walletList"},ge=["disabled","onClick"];var Ae=(0,i.aZ)({__name:"LootLockerWallets",setup(e){const t=te(),n=W(),a=async()=>{console.log("ADD WALLET!",n.userAddress);try{await n.signMessage("Add Wallet"),await t.addWallet(n.userAddress)}catch(e){}};return(e,s)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("button",{class:"addWallet",disabled:!(0,L.SU)(n).isWalletConnected||(0,L.SU)(t).wallets.includes((0,L.SU)(n).userAddress),onClick:a},"Add Wallet",8,ce),(0,i._)("ul",me,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,L.SU)(t).wallets,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"addedAddress",key:e},[(0,i.Uk)((0,B.zw)(e)+" ",1),(0,i._)("button",{class:"removeWallet",disabled:(0,L.SU)(t).loading,onClick:n=>(0,L.SU)(t).removeWallet(e)},"Remove",8,ge)])))),128))])]))}});const be=Ae;var Ie=be;const we={id:"minting-dapp",class:"preview"},ve=(0,i._)("img",{class:"logoVDSC",src:E,alt:"logo VDSC"},null,-1),he={key:0,class:"alert alert-warning",role:"alert"},Ce={class:"small"},fe={key:1,class:"alert alert-warning alert-dismissible fade show",role:"alert"},Me={key:2,class:"containerMintStatus"},Te={key:3,class:"collection-not-ready"},ke=(0,i._)("svg",{class:"spinner",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,i._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Se={key:4,class:"no-wallet"},Ge={key:5,class:"walletTop"},Ze=(0,i.uE)('<div class="socialLinks"><ul><li><a href="https://twitter.com/VDSC_Official" target="_blank"><img src="'+x+'" alt="VDSC twitter"></a></li><li><a href="https://web.telegram.org/a/#-1771472469" target="_blank"><img src="'+P+'" alt="VDSC discord"></a></li><li><a href="https://opensea.io/collection/volteddragonssailorsclub" target="_blank"><img src="'+z+'" alt="VDSC opensea"></a></li></ul></div>',1);var We=(0,i.aZ)({__name:"HomeView",setup(e){const t=W(),n=te(),a=(0,L.iH)("");return(0,i.YP)((()=>t.userAddress),(e=>{!a.value&&e&&(a.value=e?.toString())})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",we,[ve,(0,L.SU)(t).isNotMainnet?((0,i.wg)(),(0,i.iD)("div",he,[(0,i.Uk)(" You are not connected to Mainnet. "),(0,i._)("span",Ce,[(0,i.Uk)("Current network: "),(0,i._)("strong",null,(0,B.zw)((0,L.SU)(t).network?.name),1)])])):(0,i.kq)("",!0),(0,L.SU)(t).errorMessage?((0,i.wg)(),(0,i.iD)("div",fe,[(0,i.Uk)((0,B.zw)((0,L.SU)(t).errorMessage)+" ",1),(0,i._)("button",{onClick:a[0]||(a[0]=e=>(0,L.SU)(t).setError()),type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})])):(0,i.kq)("",!0),(0,L.SU)(t).isWalletConnected&&(0,L.SU)(t).isContractReady?((0,i.wg)(),(0,i.iD)("div",Me,[(0,i.Wm)(X),(0,L.SU)(n).isLogged?((0,i.wg)(),(0,i.j4)(Ie,{key:1})):((0,i.wg)(),(0,i.j4)(ye,{key:0}))])):(0,i.kq)("",!0),(0,L.SU)(t).isContractReady?(0,L.SU)(t).isWalletConnected?(0,L.SU)(t).isWalletConnected?((0,i.wg)(),(0,i.iD)("div",Ge,[(0,i._)("button",{class:"connectButton",onClick:a[2]||(a[2]=(...e)=>(0,L.SU)(t).connectWallet&&(0,L.SU)(t).connectWallet(...e))})])):(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Se,[(0,i._)("button",{class:"connectButton",onClick:a[1]||(a[1]=(...e)=>(0,L.SU)(t).connectWallet&&(0,L.SU)(t).connectWallet(...e))},"Connect Wallet")])):((0,i.wg)(),(0,i.iD)("div",Te,[ke,(0,i.Uk)(" Loading collection data... ")])),Ze]))}});const De=We;var Ue=De;const je=[{path:"/",name:"home",component:Ue}],Ne=(0,R.p7)({history:(0,R.PO)(),routes:je});var Re=Ne;const Le=(0,l.WB)();var Be=Le,Ee=(n(2166),n(5361));window.Buffer=window.Buffer||Ee.lW,(0,a.ri)(N).use(Re).use(Be).mount("#app")},5883:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,s){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],s=e[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(u--,1);var p=i();void 0!==p&&(t=p)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{335:"9441ed62",612:"40c9d4b5",776:"b0cd37f0",780:"34c2a190",892:"6203744a",943:"ab80b63d",979:"6f7e0118"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-web3:";n.l=function(a,i,s,o){if(e[a])e[a].push(i);else{var r,l;if(void 0!==s)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var d=p[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+s),r.src=a),e[a]=[i];var y=function(t,n){r.onerror=r.onload=null,clearTimeout(c);var i=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},c=setTimeout(y.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=y.bind(null,r.onerror),r.onload=y.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var s=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=s);var o=n.p+n.u(t),r=new Error,l=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,i[1](r)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,o=a[0],r=a[1],l=a[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(a);p<o.length;p++)s=o[p],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkvue_web3"]=self["webpackChunkvue_web3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7640)}));a=n.O(a)})();
//# sourceMappingURL=app.fd41ce84.js.map