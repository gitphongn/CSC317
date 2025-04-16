## Part 1 - JS Calculator 

## Overview
For this project, you'll create a fully functional calculator that mimics the design and functionality of the iOS/Android calculator app. This project will let you apply the JavaScript fundamentals we've covered in our first week, including DOM manipulation, event handling, functions, and more.

## Requirements

### Core Functionality
Your calculator should implement these basic operations:
- Addition, subtraction, multiplication, and division
- Clear functionality (AC button)
- Positive/negative toggle
- Percentage calculation
- Decimal point input
- Equals operation

### User Interface
- Create a grid-based layout similar to the iOS calculator
- Include a display area showing the current input/result
- Design should include:
    - Number buttons (0-9)
    - Operation buttons (+, -, ×, ÷)
    - Utility buttons (AC, +/-, %, =)
    - Decimal point button (.)
- Apply appropriate colors and styling:
    - Dark background
    - Light colored text
    - Orange operation buttons
    - Gray utility buttons
    - Dark gray number buttons
 
### Technical Requirements
- Use vanilla JavaScript (no libraries or frameworks)
- Create a responsive design that works on different screen sizes
- Implement keyboard support for numbers and operations
- Handle edge cases (division by zero, etc.)
- Implement proper input validation
- Use event listeners for button clicks and keyboard input
- Apply ES6+ features where appropriate

## Implementation Steps

### 1. HTML Structure
- Create the calculator container
- Add the display area
- Create a grid for the buttons
- Add all necessary buttons with appropriate labels

### 2. CSS Styling
- Set up the grid layout
- Style the display area
- Format the buttons (colors, shapes, sizes)
- Add hover/active states for buttons
- Make the design responsive

### 3. JavaScript Functionality
- Implement functions to:
    - Capture and display button inputs
    - Perform calculations
    - Handle special functions (AC, +/-, %)
    - Process and display results
- Add keyboard event listeners
- Implement secure evaluation of expressions
- Handle error cases


## Project Deliverables
- Complete HTML, CSS, and JavaScript files
- A README.md explaining your implementation choices
- Host your calculator on GitHub Pages
- Submit the GitHub repository link

## Evaluation Criteria
- Functionality: Does the calculator work correctly?
- Code Quality: Is the code well-organized and error free?
- Design: Does it look similar to the iOS/Android calculator?
- User Experience: Is it intuitive and easy to use?
- Error Handling: Does it handle edge cases gracefully?
- Implementation of JavaScript concepts covered in lectures

## Tips
- Start by implementing the basic UI
- Add number input functionality first
- Then implement basic operations one at a time
- Test each feature thoroughly before moving to the next
- Don't worry about complex operations initially
- Use console.log() for debugging
- Consider using separate functions for different responsibilities
- Test keyboard input separately from button clicks


## Troubleshooting Common Issues

### Node.js Installation Problems
- **Windows**: Make sure to run the installer as administrator
- **Mac**: If using Homebrew, make sure brew is updated with `brew update`
- **Linux**: You might need to add `sudo` before installation commands

### JavaScript File Not Running
- Make sure you're in the correct directory when running `node hello.js`
- Check file permissions (especially on Mac/Linux)
- Verify there are no syntax errors in your code

### Browser Integration Issues
- Check browser console (F12) for any error messages
- Ensure the file path to your JavaScript is correct
- Try using a different browser if problems persist

### GitHub Pages Issues
- Make sure your repository is public (GitHub Pages doesn't work with private repositories on free accounts)
- Check that your files are in the main branch
- Remember that GitHub Pages can take a few minutes to update after changes
- If your site shows a 404 error, make sure your file paths are correct and case-sensitive
- For repository-level GitHub Pages, your files need to be at the root level or correctly referenced


## Part 2 - Portfolio Integration

### Overview
In this part of the assignment, you'll integrate your JavaScript calculator from Part 1 into your personal portfolio website from Assignment 3. This will give you practice with linking between pages, organizing project files, and presenting your work professionally.

### Requirements

1. **Portfolio Setup**
   - Copy your portfolio website files from Assignment 3 into your Assignment 4 directory
   - Update your portfolio's structure to include a projects section (if it doesn't already have one)
   - Make sure to fix all HTML and CSS errors from Assignment 3
   - **Note: this step will overwrite the index.html in Part 0.**

2. **Calculator Integration**
   - Add your calculator as the first project in your portfolio's project section
   - Create a project card/entry for the calculator that includes:
     - Project title ("JavaScript Calculator")
     - Brief description of the calculator and its features
     - Screenshot or preview image of the calculator
     - Technologies used (HTML, CSS, JavaScript)
     - Link to the calculator page

3. **Navigation Structure**
   - Ensure your calculator.html page is properly linked from the portfolio
   - Add a "Back to Portfolio" link on your calculator page
   - Make sure all navigation links work correctly

4. **Code Organization**
   - Organize your files in a clean directory structure
   - Ensure all file paths are correct after integration
   - Update any relative links as needed

5. **Testing & Deployment**
   - Test all functionality on your local machine
   - Deploy the updated portfolio to GitHub Pages
   - Verify that navigation between pages works on the live site

### Deliverables
- Updated portfolio website with integrated calculator project
- Functioning navigation between portfolio and calculator
- GitHub repository containing all files
- Live GitHub Pages deployment

## Final Submission
**All Parts Due: Wednesday, April 16th by 11:59 PM**

### Requirements

To complete Assignment 4, you must submit all three parts:
- Part 0: Environment Setup
- Part 1: JS Calculator
- Part 2: Portfolio Integration