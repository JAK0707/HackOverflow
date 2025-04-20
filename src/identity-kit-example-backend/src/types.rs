use candid::{CandidType, Principal};
use serde::{Serialize, Deserialize};

#[derive(Clone, CandidType, Serialize, Deserialize, Debug)]
pub struct TokenTransferArgs {
    pub tokens: u64,
    pub from: Principal,
    pub to: Principal,
}