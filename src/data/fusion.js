const base = "https://profench-paper-s3-bucket.s3.us-east-1.amazonaws.com/public"

export const fusion = [
    {
        id: 1,
        name: "1. Element-Wise Fusion",
        architecture: `${base}/image/architect/Element-wise.avif`,
        details: "MAE  : 0.0562 \n MSE  : 0.0112 \n RMSE : 0.1056 \n MAPE : 2.0927% \nR²   : 0.9979",
        parameters: "393, 825",
    },
    {
        id: 2,
        name: "2. GenNN Fusion",
        architecture: `${base}/image/architect/GenNN.avif`,
        details: "MAE  : 0.1935\n MSE  : 0.0672\n RMSE : 0.2592\n MAPE : 6.9900%\n R²   : 0.9873",
        parameters: "491,281",
    },
    {
        id: 3,
        name: "3. Early Fusion",
        architecture: `${base}/image/architect/Early.avif`,
        details: "MAE  : 0.0803 \n MSE  : 0.0313 \n RMSE : 0.1769 \n MAPE : 2.7874% \n R²   : 0.9941",
        parameters: "636,101",
    },
    {
        id: 4,
        name: "4. Attention-Based Fusion",
        architecture: `${base}/image/architect/Attention.avif`,
        details: "MAE  : 0.1040\n MSE  : 0.0244\n RMSE : 0.1563\n MAPE : 4.0835%\n R²   : 0.9954",
        parameters: "1,743,777",
    },
    {
        id: 5,
        name: "5. Constraint-Based Fusion",
        architecture: `${base}/image/architect/Constraint.avif`,
        details: "MAE  : 0.3593\n MSE  : 0.1850\n RMSE : 0.4301\n MAPE : 10.3935%\n R²   : 0.9651",
        parameters: "628,625",
    },
    {
        id: 6,
        name: "6. GNN Fusion",
        architecture: `${base}/image/architect/GNN.avif`,
        details: "MAE  : 0.0791\n MSE  : 0.0261\n RMSE : 0.1617\n MAPE : 4.2415%\n R²   : 0.9951",
        parameters: "217,826",
    },
    {
        id: 7,
        name: "7. Concatenation Fusion",
        architecture: `${base}/image/architect/Concatenation.avif`,
        details: "MAE  : 0.1658\nMSE  : 0.0651\nRMSE : 0.2552\nMAPE : 5.4944%\nR²   : 0.9877",
        parameters: "655,361",
    },
    {
        id: 8,
        name: "8. Decision-Level Fusion",
        architecture: `${base}/image/architect/Decision-Level.avif`,
        details: "MAE  : 0.1530\n MSE  : 0.0400\n RMSE : 0.2000\n   MAPE : 7.0092%\n R²   : 0.9925",
        parameters: "644,996",
    },
    {
        id: 9,
        name: "9. En-De Fusion",
        architecture: `${base}/image/architect/En-De.avif`,
        details: "MAE  : 0.1389\nMSE  : 0.0437\nRMSE : 0.2090\nMAPE : 6.2753%\nR²   : 0.9918",
        parameters: "1,647,361",
    },
    // {
    //     id: 10,
    //     name: "Model (WiVi32-Fusion)",
    //     parameters: "393,825",
    // }
]