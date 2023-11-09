import styles from "./post.module.css"

export default function Post(props) {
    return (
        <article className={styles.article}>
            <p className={styles.id}>{props.post.id}</p>
            <h2 className={styles.title}>{props.post.title}</h2>
            <p className={styles.name}>{props.user.name}</p>
            <p className={styles.body}>{props.post.body}</p>
        </article>
    )
}