
import { useEffect, useState } from 'react'

export default function FotoCachorro() {
  const [imagem, setImagem] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((resposta) => resposta.json())
      .then((dados) => setImagem(dados.message))
  }, [])

  return (
    <div>
      <h1>Imagem de Cachorro</h1>

      {imagem && (
        <img
          src={imagem}
          alt="Cachorro aleatório"
          width="300"
        />
      )}
    </div>
  )
}
