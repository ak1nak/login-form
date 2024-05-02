## Component Tree Structure and List

Below, I've outlined a high-level component tree structure, detailed the responsibilities of each component, and provided naming conventions that are both descriptive and aligned with common practices in front-end development.

### SignUpForm1

- InputField (username)
- InputField (password)
- SubmitButton

### SignUpForm2

- InputField (username)
- InputField (password)
- GenderSelector
- SubmitButton

## Components List and Naming

- **SignUpForm1**: Component for the first sign-up form.
- **SignUpForm2**: Component for the second sign-up form.
- **InputField**: Reusable input component.
- **SubmitButton**: Reusable button component for form submission.
- **GenderSelector**: Component for selecting gender, specific to SignUpForm2.

## Component Responsibilities

### SignUpForm1:

**Purpose**: Manages the state and structure of the sign-up form for username and password only.

**Responsibilities**:

- Collects user inputs for username and password.
- Validates the input fields before submission.
- Handles form submission by sending data to the specified API endpoint.

### SignUpForm2:

**Purpose**: Manages the state and structure of the sign-up form that includes username, password, and gender.

**Responsibilities**:

- Collects user inputs for username, password, and gender.
- Validates all fields before submission.
- Handles form submission to a different API endpoint from SignUpForm1.

### InputField:

**Purpose**: A reusable component for input fields.

**Responsibilities**:

- Displays a label (if provided).
- Renders an input element of a specified type (e.g., text, password).
- Implements validation logic as needed.
- Can be extended to include additional styling or functionality.

### SubmitButton:

**Purpose**: A reusable button component for submitting forms.

**Responsibilities**:

- Displays a button with customizable text.
- Executes the form submission function when clicked.
- Can be styled or disabled based on form state.

### GenderSelector:

**Purpose**: Specific component for selecting gender in SignUpForm2.

**Responsibilities**:

- Renders radio buttons or a dropdown for gender selection.
- Manages state of the selected option.
- Can be validated as part of the form submission process.

###

npm install
npm run dev
