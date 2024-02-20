import styles from '@styles/modules/GridMask.module.scss'

export default function GridMask() {
	return (
		<>
			<div className={styles.GridMask_Grid}>
				<div className={styles.GridMask_Lines}></div>
			</div>
			<div className={styles.GridMask}></div>
			<div className={styles.GridMask_Crt}></div>
		</>
	)
}