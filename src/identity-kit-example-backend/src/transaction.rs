use candid::Principal;
use ic_cdk::{call, update};

use crate::types::TokenTransferArgs;
use icrc_ledger_types::{
    icrc1::{account::Account, transfer::BlockIndex},
    icrc2::transfer_from::{TransferFromArgs, TransferFromError},
};
#[update]
pub async fn icrc_transfer(args: TokenTransferArgs) -> Result<BlockIndex, String> {
    
    let ledger_canister_id: Principal = Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai")
        .map_err(|e| format!("Invalid canister ID: {:?}", e))?;

    let transfer_args = TransferFromArgs {
        amount: args.tokens.into(),
        to: Account {
            owner: args.to,
            subaccount: None,
        },
        fee: None,
        memo: None,
        created_at_time: None,
        spender_subaccount: None,
        from: Account {
            owner: args.from,
            subaccount: None,
        },
    };

    call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
        ledger_canister_id,
        "icrc2_transfer_from",
        (transfer_args,),
    )
    .await
    .map_err(|e| format!("failed to call ledger: {:?}", e))?
    .0
    .map_err(|e| format!("ledger transfer error {:?}", e))
}