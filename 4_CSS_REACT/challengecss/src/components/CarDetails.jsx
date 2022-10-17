import styles from './CarDetails.module.css'

const CarDetails = ({ marca, cor, placa }) => {
  return (
    <div>
      <ul>
        <li className={styles.car_details}>Marca: {marca}</li>
        <li className={styles.car_details}>Cor: {cor}</li>
        <li className={styles.car_details}>Placa: {placa}</li>
      </ul>
    </div>
  )
}

export default CarDetails
