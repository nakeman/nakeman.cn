import React from 'react'
import { Link } from 'gatsby'

import './PostList.css'

export const PostList = ({
  data = [],
  showYears,
  query,
  prefix,
  hideDate,
  yearOnly,
  ...props
}) => {
    const collection = {}

    data.forEach((post) => {
      const year = post.date?.split(', ')[1]

      collection[year] = [...(collection[year] || []), post]
    })
//   const years = useMemo(() => Object.keys(postsByYear).reverse(), [postsByYear])
    const years = Object.keys(collection).reverse();

  if (showYears) {
    return years.map((year) => (
      <section key={year} className="postlist segment">
        <h2 className="year">{year}</h2>
        <div className="posts">
          {collection[year].map((node) => (
            <PostItem key={node.id} data={node} query={query} prefix={prefix} />
          ))}
        </div>
      </section>
    ))
  } else {
    return (
      <div class='post'>
        {data.map((node) => (
          <PostItem
            key={node.id}
            data={node}
            query={query}
            prefix={prefix}
            hideDate={hideDate}
            yearOnly={yearOnly}
            {...props}
          />
        ))}
      </div>
    )
  }
}

const PostItem = ({ data, prefix }) => {
    //let formattedDate
  
    // if (data.date) {
    //   if (!newspaper) {
    //     const dateArr = data.date.split(' ')
    //     dateArr.pop()
  
    //     dateArr[0] = dateArr[0].slice(0, 3)
    //     //formattedDate = dateArr.join(' ').slice(0, -1)
    //   } else {
    //     // formattedDate = getFormattedDate(node.date)
    //     //console.log(node.date)
    //   }
    // }
  
    return (
      <Link
        to={prefix ? `/${prefix}${data.url}` : `/${data.url}`}
        key={data.id}
        className="post"
      >
        <h3>{data.title}</h3>
        <time>{data.date}</time>
      </Link>
    )
  }

// function getFormattedDate(date) {
//     const dateArr = date.split(' ')
//     if (dateArr[1].startsWith('0')) {
//       dateArr[1] = dateArr[1].slice(1, 2)
//     } else {
//       dateArr[1] = dateArr[1].slice(0, 2)
//     }
//     dateArr[1] += ','
  
//     return dateArr.join(' ')
//   }
  