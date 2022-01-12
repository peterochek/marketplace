import {getConvertedNFT} from "../standardization/nft-converter";
import {fetchNftContracts} from "../nft-contracts";
import {nftAPI} from "./api";
import {marketAPI} from "../market";
import {AccountId, ContractId, TokenId} from "../types";


export const getNFTsByContractAndTokenId = async (contractId: ContractId, tokenId: TokenId) => {
    const nft = await nftAPI.fetchNft(contractId, tokenId)
    const tokenPrice = await marketAPI.fetchTokenPrice(contractId, tokenId);
    return getConvertedNFT(contractId, nft, tokenPrice)
}

export async function getNftPayouts(contractId: string, tokenId: string) {
    const TREASURY_PERCENT = 2;
    return nftAPI.fetchTokenPayouts(contractId, tokenId).then(payouts => {
        let royalties: Record<string, number> = {'treasury': TREASURY_PERCENT};
        let highestPayout = null;
        for (let payoutKey in payouts['payout']) {
            const payoutVal = parseInt(payouts['payout'][payoutKey]) / 1000000;
            if (!highestPayout || highestPayout[1] < payoutVal) {
                highestPayout = [payoutKey, payoutVal]
            }
            royalties[payoutKey] = payoutVal
        }
        if (highestPayout) {
            delete royalties[highestPayout[0]]
        }
        delete royalties['undefined']

        return royalties
    })
}

function addExtraContracts(curContracts: string[]) {
    const extraContracts = ['mjol.near'];
    for (let contract of extraContracts) {
        if (!curContracts.includes(contract)) {
            curContracts.push('mjol.near');
        }
    }
    return curContracts
}

export async function getNfts(accountId: AccountId) {

    let nftContracts = await fetchNftContracts(accountId)
    nftContracts = addExtraContracts(nftContracts)

    const tokenPrices = await marketAPI.fetchUserTokenPrices(accountId);
    return nftContracts.map(contractId =>
        nftAPI.fetchUserTokens(contractId, accountId)
            .then(nfts =>
                nfts.map((nft: any) =>
                    getConvertedNFT(contractId, nft, tokenPrices)
                )
            )
    )
}

