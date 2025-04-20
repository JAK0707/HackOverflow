use ic_cdk::{caller, update};

use crate::state::{Dataset, DATASETS};

#[update]
pub fn get_my_datasets() -> Vec<Dataset> {
    let caller = caller();

    DATASETS.with(|datasets| {
        datasets
            .borrow()
            .get(&caller)
            .cloned()
            .unwrap_or_default()
    })
}

#[update]
pub fn get_dataset(name: String) -> Option<Dataset> {
    let caller = caller();

    DATASETS.with(|datasets| {
        datasets
            .borrow()
            .get(&caller)
            .and_then(|list| list.iter().find(|d| d.name == name).cloned())
    })
}
