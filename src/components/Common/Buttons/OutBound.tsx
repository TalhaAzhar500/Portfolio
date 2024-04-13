import Link from "next/link";
import styles from "../style.module.css";

interface outboundProps {
  link: string;
  height?: string;
  width?: string;
  tab?: string;
}

const Outbound: React.FC<outboundProps> = ({ link, height, width, tab }) => {
  return (
    <Link href={link} target={tab === "new" ? "_blank" : "_self"}>
      <div className={styles.outbound} style={{ width: width, height: height }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-1)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ width: "100%", height: "100%" }}
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </Link>
  );
};

export default Outbound;
