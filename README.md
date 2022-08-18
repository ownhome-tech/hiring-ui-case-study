# OwnHome Front-end Engineer Take Home Case Study

 **DO NOT FORK THIS REPOSITORY IN GITHUB, CLONE IT AND FOLLOW THE INSTRUCTIONS FOR SUBMISSION AT THE END OF THE README**

Hi, thanks for completing the front-end engineer case study

The purpose of this exercise is for us to get a sense of your skill level with CSS, JavaScript, and React and to see how you think and your approach to solving problems.

The problem we've chosen is a buying power, similar to what exists on banks home loan calculators. This will involve working with OwnHome API to get the calculation results. 

* Write as many tests and classes as you feel you need.
* It's up to you to define the data structures
* Handle API responses and the data returned
* Feel free to use any additional packages you think will help. Of course, the goal here is to show us clean, readable code (we want to see that you can write maintainable code)

## The Brief

### Buying Power Calculator

This project is a small public facing calculator to allow users to understand their buying power with OwnHome. It uses a public OwnHome API to return the buying power or an error state depending on the infromation inputted by the user.

### How it works
The calculator consists of the user providing their income, debt and desired location to buy. All these inputs are used to calculate how much OwnHome could buy for the customer. The higher the income the higher the buying power, the more debts the less the buying power. We have minimum buying power thresholds which we can support. 

The user will be able to select/search for suburbs which they can buy in, we've provided a suburbs JSON which you can use to for results. Note, we we can only support some locations at this moment (e.g. we can only currently buy in suburbs around Sydney and Brisbane) so their is a screen for when they provide a suburb which we can't support and click submit. 

Clicking 'Get Pre-Qualified for Free' will take the user to https://app.ownhome.com/apply

### Design files
Project designs can be viewed via Figma [here](https://www.figma.com/file/d9WhrUS9bSCmMuwKoYuNuY/OwnHome-BP-Calculator?node-id=0%3A1).

If you sign in to figma you will be able to inspect/download the designs

### Technical Notes
Documentation for the API is below.

[See OpenAPI Documentation](https://app.swaggerhub.com/apis/MITCH_2/Buying_Power_Calculator/0.0.1)

## Getting Started
This application has been bootstrapped with [create-react-app](https://create-react-app.dev/docs/getting-started/). We use [yarn](https://yarnpkg.com/), but this should work with npm if that's your preference.

## FAQ

### Do I need an API key to calculate?

No, the API supports [unauthenticated access] which will return the buying power and any other numbers, or an error if we can't support that user/their inputs.

### Do I only need to request via API?

Yes, we have a single API which you can use. 

## Submitting your work

When you have completed the exercise and wish to submit your work, please do the following:

1. Make sure all your work is commited to your branch, good commit messages and telling a story
   through the commits is a good thing.
2. Zip up the folder containing your repo and send to either your recruitment contact or mitch@ownhome.com.

**DO NOT PUSH THE REPO UP TO GITHUB OR CREATE A PULL REQUEST AGAINST THIS REPO.**