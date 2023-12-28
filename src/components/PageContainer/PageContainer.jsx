import React from 'react'
import "./PageContainer.scss"
function PageContainer({ children, max_width, parent_class, content_class }) {
  return (
    <div className={`page_container ${parent_class && parent_class}`} >
      <div className={`content  ${content_class && content_class} `} style={{ maxWidth: max_width ? max_width : "1200px" }}>
        {children}
      </div>
    </div>
  )
}

export default PageContainer