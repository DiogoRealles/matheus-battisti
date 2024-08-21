import React from 'react'

interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  category: Category
}

export enum Category{
  React = 'React',
  JS = 'JS',
  TS = 'TS',
  HTML = 'HTML'
}

function SecondComponent({title, content, commentsQty, tags, category}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{commentsQty}</p>
      <div>
        {
          tags.map((item, index) => (
            <span key={index}> #{item}</span>
          ))
        }
      </div>
      <h4>Category: {category}</h4>
    </div>
  )
}

export default SecondComponent