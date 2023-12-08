import React, { useState, useEffect } from 'react';

import Blob from './Blob';

import './css/ChooseYourOwnAdventure.css'



//Each element of the list contains an object with the id, text prompt and choices for each node of the game
//Each choice has a text value and nextNode value which indicates what node it will go to if selected
const storyData = [
    {
        id: 1,
        text: 'You and some scientists develop the first time machine and need to decide where to go.',
        choices: [
            { text: 'Go back the first potato ever grown 🥔', nextNode: 2 },
            { text: 'Go back to the first brick ever made 🧱', nextNode: 3 },
        ]
    },
    {
        id: 2,
        text: 'You find yourself in ancient Peru, watching farmers setting up their terrace farms.',
        choices: [
            { text: 'Attempt to talk to a farmer 🧑🏽‍🌾', nextNode: 4 },
            { text: 'Disguise yourself as a farmer 🥸', nextNode: 5 }
        ]
    },
    {
        id: 3,
        text: 'You find yourself in the middle of an ancient civilisation where you see brick layers being forced to make bricks for their king.',
        choices: [
            { text : 'Attempt to talk to a brick layer 👷🏽‍♂️', nextNode: 6 },
            { text: 'Disguise yourself as a brick layer 🥸', nextNode: 7 }
        ]
    },
    {
        id: 4,
        text: 'You and the farmer have trouble communicating due to a language barrier',
        choices: [
            { text: 'Pull out your phone to translate what they are saying 📱', nextNode: 8 },
            { text: 'Use hand gesture to attempt to communicate 👐', nextNode: 9 }
        ]
    },
    {
        id: 5,
        text: 'You disguise yourself and walk past the other farmers into a building with a locked door',
        choices: [
            { text: 'Look for a key 🗝️', nextNode: 10 },
            { text: 'Smash the door down 💥', nextNode: 11 }
        ]
    },
    {
        id:6,
        text: 'The brick layer sees you in your modern clothes and thinks you are from an enemy city so he starts to chase you.',
        choices: [
            {text: 'Run away 🏃', nextNode: 12},
            {text: 'Fight back ⚔️', nextNode: 13}
        ]
    },
    {
        id:7,
        text: "You attempt to disguise yourself but the brick layers don't recognise you and alert some nearby soldiers that you are an impostor",
        choices: [
            {text: 'Attack the soldiers 🪖', nextNode: 14},
            {text: 'Go hide underneath a pile of bricks 🧱🧱🧱', nextNode: 15}
        ]
    },
    {
        id:8,
        text: "The farmer sees your phone and thinks it is magic. He grabes his basket and starts pelting you with potatoes",
        choices: [
            {text: 'Eat the potatoes', nextNode: 16},
            {text: 'Stand still and get hit', nextNode: 17}
        ]
    },
    {
        id: 9,
        text: 'You use your hands to gesture that you want to know where the potatoes are kept and he points towards two buildings',
        choices: [
            { text: 'Go into the dark and scary looking building 🏚️', nextNode: 18 },
            { text: 'Go into the pleasant looking home that seems very warm and cozy', nextNode: 19 }
        ]
    },
    {
        id: 10,
        text: 'You rummage around in a nearby barrel for a key and instead find it is filled with gunpowder.',
        choices: [
            { text: 'Use the match next to the barrel to blow open the door 💣', nextNode: 20 },
            { text: 'Keep looking for the key 🔍', nextNode: 21 }
        ]
    },
    {
        id: 11,
        text: 'You back up and run into the door and smash it open. But instead of finding a new room you find yourself falling down a dark hole.',
        choices: [
            { text: 'Try and get up 🦵', nextNode: 22 },
        ]
    },
    {
        id: 12,
        text: 'You run away and fall of a cliff into the ocean',
        choices: [
            { text: 'Try to swim up 🏊‍♂️', nextNode: 22 },
        ]
    },
    {
        id: 13,
        text: 'You fight back and end up knocking out the brick layer and steal his bricks.',
        choices: [
            { text: 'Collect your reward', nextNode: 23 },
        ]
    },
    {
        id: 14,
        text: 'You fight back and end up getting knocked out.',
        choices: [
            { text: 'Try and wake up', nextNode: 22 },
        ]
    },
    {
        id: 15,
        text: 'Once under your brick pile you realise you are safe in your new cozy brick home',
        choices: [
            { text: 'Colelct your reward', nextNode: 23 },
        ]
    },
    {
        id: 16,
        text: 'Wow those potatoes were really good',
        choices: [
            { text: 'Collect your reward', nextNode: 24 },
        ]
    },
    {
        id: 17,
        text: 'You are pelted with large potatoes which bruise you',
        choices: [
            { text: 'Collapse to the ground', nextNode: 22 },
        ]
    },
    {
        id: 18,
        text: 'The house was occupied by a nice sweet old man who wants to give you a gift',
        choices: [
            { text: 'Take his gift 🎁', nextNode: 24 },
        ]
    },
    {
        id: 19,
        text: 'The nice looking house was filled with hugry cannibals :(',
        choices: [
            { text: 'Get eaten...', nextNode: 22 },
        ]
    },
    {
        id: 20,
        text: 'You remember you do not know how to use gunpowder and blow it up in your face',
        choices: [
            { text: 'Try and clean your face', nextNode: 22 },
        ]
    },
    {
        id: 21,
        text: 'You spend the next 48 hours searching for the key but have no luck',
        choices: [
            { text: 'Collapse from exhaustion', nextNode: 22 },
        ]
    },
    {
        id: 22,
        text: 'Oh no, you died :(',
        choices: [
            { text: 'Restart ⟲', nextNode: 1 },
        ]
    },
    {
        id: 23,
        text: 'Congratulations, you have a years supply of bricks!!!!',
        choices: [
            { text: 'Restart ⟲', nextNode: 1 },
        ]
    },
    {
        id: 24,
        text: 'Congratulations, you have very yummy potatoes to eat!',
        choices: [
            { text: 'Restart ⟲', nextNode: 1 },
        ]
    },
];


const ChooseYourOwnAdventure = () => {

    const [currentNode, setCurrentNode] = useState(1); // Start from node 1


    const currentStoryNode = storyData.find((node) => node.id === currentNode);


    //Creates a custom event for animating the text on load
    const animatePrompt = new Event("animate")

    //Changes the node, prompt and triggers the animation
    const handleChoice = (nextNode) => {
        setCurrentNode(nextNode);
        let question = document.getElementById("prompt")
        question.dispatchEvent(animatePrompt)
    };


    useEffect(() => {


        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ℸ ̣||ꖎᒷ∷╎ᓭᔑᒲ𝙹⊣⚍ᓭ";
        let interval = null;

        //Creates an event listener for the custom animate event which triggers the text changing animation
        const prompt = document.getElementById("prompt")
        prompt.addEventListener(
            "animate",
            (e) => {
                let iteration = 0;

                clearInterval(interval);

                interval = setInterval(() => {
                    animatePrompt.target.innerText = animatePrompt.target.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return animatePrompt.target.dataset.value[index];
                            }

                            return letters[Math.floor(Math.random() * 70)]
                        })
                        .join("");

                    if (iteration >= animatePrompt.target.dataset.value.length) {
                        clearInterval(interval);
                    }

                    iteration += 1 / 3;
                }, 1);
            })
        prompt.dispatchEvent(animatePrompt)




    }, [])



    return (
        <>
            <Blob/> {/*Blob component for background*/}
            <div className="input-box">

                {/* Uses the story data to generate UI with text and buttons */}
                <h2 className="prompt" id="prompt" data-value={currentStoryNode.text}>{currentStoryNode.text}</h2>
                <ul className="choices">
                    {currentStoryNode.choices.map((choice, index) => (
                        <li key={index}>
                            <button className="button" onClick={() => handleChoice(choice.nextNode)}>
                                <p className="choice-desc">{choice.text}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ChooseYourOwnAdventure;
