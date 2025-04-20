use ic_cdk::{caller, update};

use crate::state::{Dataset, DATASETS};

#[update]
pub fn create_dataset(
    name: String,
    stipend: f64,
    training_parameters: String,
    file_data: Vec<u8>,
) -> bool {
    let caller = caller();

    DATASETS.with(|datasets| {
        let mut datasets = datasets.borrow_mut();
        let user_datasets = datasets.entry(caller).or_insert_with(Vec::new);

        // Optional: check if a dataset with the same name exists
        if user_datasets.iter().any(|d| d.name == name) {
            return false; // Already exists
        }

        user_datasets.push(Dataset {
            name,
            stipend,
            training_parameters,
            file_data,
        });
        true
    })
}

#[update]
pub fn delete_dataset(name: String) -> bool {
    let caller = caller();

    DATASETS.with(|datasets| {
        let mut datasets = datasets.borrow_mut();
        if let Some(user_datasets) = datasets.get_mut(&caller) {
            let len_before = user_datasets.len();
            user_datasets.retain(|d| d.name != name);
            return user_datasets.len() != len_before;
        }
        false
    })
}
