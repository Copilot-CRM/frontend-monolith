## Storybook Setup

### Plugins and Configuration

1. **`react-docgen-typescript`:**  
   Integrated for improved dynamic argument table generation (autodocs).

2. **Custom `reactDocgenTypescriptOptions`:**

   - A custom `componentNameResolver` has been added to resolve `displayName` issues.
   - A `propFilter` is in place to exclude HTML element types from argument tables.

3. **`storybook-addon-pseudo-states`:**  
   Enables us to document component states like `hover`, `focus`, and `active`.

4. **`'storybook-addon-storysource':**
   Displays the source code of the story to easily reference the source jsx, args and other configuration used in each story.

5. **Custom Docs Layout in `preview.tsx`:**  
   The `preview.tsx` file is customized to render the "primary" (first in appearance in the story file) story and argTypes table:
   ```ts
   parameters: {
      docs: {
         page: () => (
            <>
               <Title />
               <Subtitle />
               <Description />
               <Primary />
               <ArgTypes />
            </>
         ),
      },
   }
   ```

### Story Conventions

- **Showcase Story:**

  - The primary story for each component is conventionally named `Showcase`.
  - It is automatically displayed on the docs page with the argument table, following our custom configuration in `preview.tsx`.
  - This story showcases the full range of visual configurations based on props or composition.
  - In some case a showcase story may not be necessary and the component may be demonstrated in a "Interactive" or "With Controls" story.

- **Pseudo State Stories:**

  - When appropriate, `storybook-addon-pseudo-states` is used to create stories for `hover`, `focus`, and `active` states.
  - If the component support a disabled state a `Disabled` story is also included, demonstrating relevant variations with the disabled prop added.

- **Additional Configurations:**

  - Additional scenarios or advanced configurations that are not covered in the `Showcase` story are included when necessary.

- **Interactive Story:**

  - Use this story to demonstrate interactive elements of the component.

- **With Controls Story:**
  - This story type uses `args` and `argTypes` to provide user-controllable props.
  - Controls are hidden in other stories and reserved for the `With Controls` story, placing the component in a "controlled" state where its behavior is determined by the controls, rather than being "uncontrolled."
