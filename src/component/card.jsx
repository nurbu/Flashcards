import React from "react";

const Cardtext = ({ qnum, qora }) => {
    const bio = [
        {question: "What is the basic unit of life?", answer: "The cell is the basic unit of life."},
        {question: "What is the function of the mitochondria?", answer: "The mitochondria are known as the powerhouse of the cell, responsible for producing ATP through cellular respiration."},
        {question: "What are the four macromolecules essential to life?", answer: "Carbohydrates, lipids, proteins, and nucleic acids."},
        {question: "What is the main function of ribosomes?", answer: "Ribosomes are responsible for protein synthesis."},
        {question: "What is homeostasis?", answer: "Homeostasis is the process by which living organisms maintain a stable internal environment despite external changes."},
        {question: "What is the shape of DNA?", answer: "DNA has a double helix shape."},
        {question: "What are the base pairs in DNA?", answer: "Adenine (A) pairs with Thymine (T), and Cytosine (C) pairs with Guanine (G)."},
        {question: "What is a mutation?", answer: "A mutation is a change in the DNA sequence that can affect genetic traits."},
        {question: "What is the purpose of mRNA in protein synthesis?", answer: "mRNA (messenger RNA) carries genetic information from DNA to the ribosome for protein production."},
        {question: "What is the difference between dominant and recessive alleles?", answer: "A dominant allele expresses its trait even when only one copy is present, whereas a recessive allele requires two copies to express the trait."}
    ];

    // Prevent accessing an invalid index
    return (
        <div className="card-text">
            {qora ? bio[qnum].question : bio[qnum].answer}
        </div>
    );
};

export default Cardtext;