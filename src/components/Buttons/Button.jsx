import "./style.css"

/* eslint-disable react/prop-types */

export default function Button({className,name}) {
  return (
    <>
        <button className={"orange_secondary" && className}>{name || "Button"}</button>
    </>
  )
}
