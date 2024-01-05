import React, { ReactNode } from "react"
import internal from "node:stream"
import { FaStar, FaRegStar } from "react-icons/fa"

interface List1Props {
  title: string
}

const listGame = [
  {
    id: 1,
    name: "Nhất Mộng Cửu Thiên",
    image:
      "https://play-lh.googleusercontent.com/MUHecOphyAOirU6vDW9vl2Z756crTG5LGrkScfaFUu_asmiFmeNnuflF8ycVJxo24r0=w840-h456-rw",
    type: "Moba",
    rate: 5
  },
  {
    id: 2,
    name: "Nhất Kiem chi Vuong",
    image:
      "https://play-lh.googleusercontent.com/ANZXiiDmVicZSWHpCZiuxW4l_rwfAPRZwcFfZkIBHiiMzpBZWRwDwQi94_m5rUDXxA=w840-h456-rw",
    type: "Nhập vai",
    rate: 2
  },
  {
    id: 3,
    name: "Nhất Mộng Cửu Thiên",
    image:
      "https://play-lh.googleusercontent.com/Vw6JN3uLmAuNqJovezAIZ-guXYwZdmIFqIbN_iv_hr58Qz6upUpsDlQtZl96hdE9DU0=w840-h456-rw",
    type: "Nhập vai",
    rate: 4
  },
  {
    id: 4,
    name: "Nhất Mộng Cửu Thiên",
    image:
      "https://play-lh.googleusercontent.com/MUHecOphyAOirU6vDW9vl2Z756crTG5LGrkScfaFUu_asmiFmeNnuflF8ycVJxo24r0=w840-h456-rw",
    type: "Nhập vai",
    rate: 1
  },
  {
    id: 5,
    name: "Nhất Mộng Cửu Thiên",
    image:
      "https://play-lh.googleusercontent.com/MUHecOphyAOirU6vDW9vl2Z756crTG5LGrkScfaFUu_asmiFmeNnuflF8ycVJxo24r0=w840-h456-rw",
    type: "Nhập vai",
    rate: 3
  },
  {
    id: 6,
    name: "Nhất Mộng Cửu Thiên",
    image:
      "https://play-lh.googleusercontent.com/MUHecOphyAOirU6vDW9vl2Z756crTG5LGrkScfaFUu_asmiFmeNnuflF8ycVJxo24r0=w840-h456-rw",
    type: "Nhập vai",
    rate: 5
  }
]

//render rate
const renderRate = (rate: number) => {
  const maxStars = 5
  const xhtml_stars: ReactNode[] = []

  for (let index = 0; index < maxStars; index++) {
    const starClassName =
      index < rate ? (
        <div className='text-yellow-400'>
          <FaStar />
        </div>
      ) : (
        <div className="text-gray-400">
          <FaRegStar />{" "}
        </div>
      )
    xhtml_stars.push(starClassName)
  }
  return xhtml_stars
}

//render list game
const renderListGame = (listGame: any) => {
  let xhtml: ReactNode = null
  if (listGame.length > 0) {
    xhtml = listGame.map((item: any, index: number) => {
      return (
        <a className='first-item' href={`games/${item.id}`} key={item.id}>
          <div className='el-image first-item-icon'>
            <img className='el-image__inner' src={item.image} alt={item.name} />
            <p className='first-item-name'>{item.name}</p>
            <div className='first-item-other'>
              {renderRate(item.rate)}
              <span className='first-item-typeName'>{item.type}</span>
            </div>
          </div>
        </a>
      )
    })
  }
  return xhtml
}

const ListStyle1: React.FC<List1Props> = ({ title }) => {
  return (
    <div className='GameStyle1'>
      <div className='first-box'>
        <h2 className='com-title'>{title}</h2>
        <div className='flex flex-nowrap'>{renderListGame(listGame)}</div>
      </div>
    </div>
  )
}

export default ListStyle1
