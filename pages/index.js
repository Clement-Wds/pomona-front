import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="title">
					<Link href="/front/home">
						<a>Home |</a>
					</Link>

					<Link href="/front/images">
						<a> Images</a>
					</Link>
				</h1>				
			</main>
		</div>
  	)
}
