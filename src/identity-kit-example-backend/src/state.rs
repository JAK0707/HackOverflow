use std::{cell::RefCell, collections::HashMap};

use candid::{CandidType, Principal};


#[derive(Clone,CandidType)]
pub struct Dataset {
    pub name: String,
    pub stipend: f64,
    pub training_parameters: String,
    pub file_data: Vec<u8>, // CSV file bytes
}

thread_local! {
    pub static DATASETS: RefCell<HashMap<Principal, Vec<Dataset>>> = RefCell::new(HashMap::new());
}