'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";

const Dashboard = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      if (!res.ok) {
        return notFound()
      }
      const data = await res.json()
      setData(data)
    } catch (error) {
      return new Error('failed to fetch data')
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, []);
  console.log(data);
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data
  return(
    <div>
      {
        data.map(item => (
          <Link href= {`/blog/${item.id}`} className={styles.container} key={item.id}>
            <div className={styles.imageContainer}>
              <Image
                src="/apps.jpg"
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
            </Link>
        ))
      }
    </div>
  )
}

export default Dashboard