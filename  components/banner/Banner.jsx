import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import bann from '../../public/assets/bann.png'
import styles from './banner.module.scss';

const Banner = () => {

    return (
        <>
        <div className={styles.banner}>
        <Image src={bann}/>
        <Text className={styles.bannerText}>Type ' help ' to view a list of available commands</Text>
        <Text></Text>
        </div>
       
        </>
    )
}

export default Banner;