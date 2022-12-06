import styles from "./MyComponent.module.css"

/* The CSS styling inside a module is available only 
to the component that imports the said module, 
therefore there is no risk for global naming 
conflicts.
*/

function MyComponent() {
  return(
    <>
      <h1 className={styles.heading}>
        Component Heading
      </h1>
      <p className={styles.bodyText}>
        This is a component paragraph
      </p>
    </>
  )
}

export default MyComponent;