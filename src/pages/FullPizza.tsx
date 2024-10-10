import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://66ae2fd5b18f3614e3b6fd15.mockapi.io/items/' + id)
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пиццы.')
        navigate('/')
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) {
    return 'Загрузка...'
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}р</h4>
    </div>
  )
}

export default FullPizza
