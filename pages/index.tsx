import { Title, Text, Card, ThemeIcon, TextInput, Textarea, Select, Button, List, Group, Stack, Modal } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GiBoatFishing } from 'react-icons/gi'
import { 
  IoStatsChartOutline, 
  IoShareSocialOutline, 
  IoCreateOutline, 
  IoMapOutline, 
  IoFishOutline, 
  IoChevronForwardCircleOutline} from 'react-icons/io5'
import { IoMdImages, IoIosPeople } from 'react-icons/io'
import { FaGithub, } from 'react-icons/fa'
import { MdOutlineRateReview } from 'react-icons/md'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { MouseEventHandler, useState } from 'react'
import IconCard from '../components/cards/IconCard/IconCard'
import ImageCard from '../components/cards/ImageCard/ImageCard'
import { CgNotes } from 'react-icons/cg'
import { useSubmitContactRequest } from '../hooks/useSubmitContactRequest'
import { showNotification } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import AppStore from '../public/app-store.svg'
import PlayStore from '../public/play-store.svg'
import Wave from '../public/wave.svg'

const Home: NextPage = () => {

  const handleChevronDownClick: MouseEventHandler<HTMLDivElement> = (e) => {
    window.scroll({ top: window.innerHeight, behavior: 'smooth' })
  }

  const [iosModalVisible, setIosModalVisible] = useState(false)
  const handleIosModal = () => setIosModalVisible(x => !x) 

  const widthLargerThan1200 = useMediaQuery('(min-width: 1200px)');
  const widthSmallerThan1000 = useMediaQuery('(max-width: 1000px)');
  const widthSmallerThan700 = useMediaQuery('(max-width: 700px)');

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reference, setReference] = useState('')
  const [body, setBody] = useState('')

  const {
    nameValid,
    nameTouched,
    emailValid,
    emailTouched,
    referenceValid,
    referenceTouched,
    bodyValid,
    bodyTouched,
    valid,
    success,
    submitRequest
  } = useSubmitContactRequest({ 
    name, email, reference, body, 
    onSuccess: () => {
      setName(''); setEmail(''); setReference(''); setBody('');
      showNotification({ 
        color: 'green',
        title: 'Contact Request Submitted',
        message: "We will review your request and get back to you as soon as we can."
      })
    }, 
    onError: () => {
      showNotification({ 
        color: 'red',
        title: 'Something went wrong',
        message: 'We could not process your request at this time.'
      })
    } 
  })

  return (
    <div className={styles.container}>

      <Head>
        <title>Heron Mobile</title>
        <meta name="description" content="Heron Mobile" />
      </Head>

      <Modal opened={iosModalVisible} onClose={handleIosModal} title={'Coming Soon'} styles={{ title: { fontWeight: 600 }}}>
        <p>The iOS app is almost finished! Check back in a few days and it should be available for download.</p>
        <Button onClick={handleIosModal}>Dismiss</Button>
      </Modal>

      <header className={styles.header}>
        <div className='frac'>
          <Image src={'/heron-logo-simple.svg'} alt={'Heron logo'} height={100} width={100}/>
          <Title order={1}>Heron</Title>
        </div>
        <motion.a 
          whileHover={{ scale: 1.1, cursor: 'pointer' }} 
          href='https://github.com/jhahn678/Heron-Expo'
          target='_blank'
        >
          <FaGithub size={32} color={'#000'}/>
        </motion.a>
      </header>


      <section className={styles.sectionOne}>
        <div className={styles.sectionOneLeft}>
          <Title 
            order={1} 
            size={widthSmallerThan700 ? 48 : 64} 
            align={widthLargerThan1200 ? 'left' : 'center'}
            variant='gradient' 
            className={styles.sectionOneText}
            gradient={{ to: 'primary', from: 'secondaryContainer.3' }}
          >
            A fully featured fishing companion
          </Title>
          <Title 
            order={1}
            align={widthLargerThan1200 ? 'left' : 'center'}
            size={widthSmallerThan700 ? 20 : 36} 
          >Discover new places to fish.</Title>
          <Title 
            order={1}
            align={widthLargerThan1200 ? 'left' : 'center'}
            size={widthSmallerThan700 ? 20 : 36} 
          >Share your catches with friends.</Title>
          <Title 
            order={1}
            align={widthLargerThan1200 ? 'left' : 'center'}
            size={widthSmallerThan700 ? 20 : 36}
          >Download the Heron app today.</Title> 
          <div className={styles.appStoreIcons}>
            <Image src={AppStore} width={138} height={45} alt={'Download on Apple App Store'} onClick={handleIosModal}/>
            <a href={'https://play.google.com/store/apps/details?id=com.jhahn678.heron'} target={'_blank'} rel='noreferrer'>
              <Image src={PlayStore} width={152} height={45} alt={'Download on Google Play Store'}/>
            </a>
          </div>
        </div>
        { widthLargerThan1200 &&
          <div className={styles.sectionOneRight}>
            <Image 
              src={'https://heron-static.s3.amazonaws.com/phones.png'} 
              alt={'Example app screens'}
              objectFit='contain' height={1000} width={900}
            />
          </div>
        }
        <div className={styles.sectionOneBottom}>
          <motion.div 
            whileHover={{ scale: 1.1, cursor: 'pointer' }} 
            onClick={handleChevronDownClick}
          >
            <BsChevronDoubleDown size={40} color={'#000'}/>
          </motion.div>
        </div>
      </section>

        { widthLargerThan1200 &&
           <div className={styles.waveCont}>
            <Image src={Wave} className={styles.wave} alt={'wave pattern'}/>
          </div>
        }


      <section className={styles.sectionTwo}>
        <div className={styles.sectionTwoTitle}>
            <Title 
              order={1} 
              size={64} 
              variant='gradient' 
              gradient={widthLargerThan1200 ? 
                { from: 'primary.0', to: 'primary.3', deg: 170 } :
                { from: 'secondaryContainer.3', to: 'primary' }
              }
            >
              319,405
            </Title>
            <Title 
              order={1} 
              align={widthSmallerThan1000 ? 'center': 'left'}
              size={widthSmallerThan1000 ? 48 : 64}
              ml={widthSmallerThan1000 ? 0 : 32}
            >
              Fisheries to Explore
            </Title>
        </div>
        <div className={styles.sectionTwoRow}>
          <div className={styles.sectionTwoColLeft}>
            <Image 
              src={'https://heron-static.s3.amazonaws.com/phone-waterbody-main.png'} 
              objectFit='contain' height={450} width={250}
              alt={'Example waterbody screen'}
            />
            <Image 
              src={'https://heron-static.s3.amazonaws.com/phone-waterbody-review.png'} 
              objectFit='contain' height={450} width={250}
              alt={'Example waterbody review'}
            />
          </div>
          <div className={styles.sectionTwoCol}>
            <Title 
              align={widthSmallerThan1000 ? 'center' : 'left'}
            >See what other fishermen think</Title>
            <div className={styles.iconCardRow}>
              <IconCard icon={<MdOutlineRateReview size={32} color={'#fff'}/>} size={100}/>
              <Text className={styles.iconCardRowText}>
                Read the latest fishery reviews to gain insight before your visit. 
                Afterwards, leave your own review to let others know how it went.
              </Text>
            </div>
            <div className={styles.iconCardRow}>
              <IconCard icon={<IoFishOutline size={32} color={'#fff'}/>} size={100}/>
              <Text className={styles.iconCardRowText}>
                Find out what others are catching. 
                Open up the map and view catch locations. 
                Log your own catches and share them with friends.
              </Text>
            </div>
            <div className={styles.iconCardRow}>
              <IconCard icon={<IoMapOutline size={32} color={'#fff'}/>} size={100}/>
              <Text className={styles.iconCardRowText}>
                Find access points and discover top locations for each fishery.
                Save your own locations and share them with others, or keep them private.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionThree}>
        <ImageCard
          title={'Log your catches'}
          body={''}
          className={styles.imageCard}
          icon={<IoCreateOutline size={20}/>}
          image={
            <Image 
              src={'https://heron-static.s3.amazonaws.com/phone-new-catch.png'} 
              height={350} width={350} objectFit='contain' 
              alt={'Example new catch screen'}
            />
          }
        />
        <ImageCard
          title={'Track your statistics'}
          body={''}
          className={styles.imageCard}
          icon={<IoStatsChartOutline size={20}/>}
          image={
            <Image 
              src={'https://heron-static.s3.amazonaws.com/phone-catch-stats.png'} 
              height={350} width={350} objectFit='contain' 
              alt={'Example statistics screen'}
            />
          }
        />
        <ImageCard
          title={'Share them with friends'}
          body={''}
          icon={<IoShareSocialOutline size={20}/>}
          className={styles.imageCard}
          image={
            <Image 
              src={'https://heron-static.s3.amazonaws.com/Phone-catch.png'} 
              height={350} width={350} objectFit='contain'
              alt={'Example view catch screen'}
            />
          }
        />
      </section>

      <section className={styles.sectionFour}>
        <Card className={styles.mapCard} shadow="lg" p="xl" radius="md" withBorder>
          <Image 
            src={'https://heron-static.s3.amazonaws.com/susquehanna-mapbox.png'} 
            layout='fill' alt={'Image of susquehanna river on map'}
          />
        </Card>
        <div className={styles.sectionFourRight}>
          <Title 
            order={1} 
            size={widthSmallerThan700 ? 32 : 48}
            align={widthSmallerThan700 ? 'center' : 'left'}
          >Map Your Favorite Spots</Title>
          <div className='frac' style={{ marginTop: 40 }}>
            <ThemeIcon  
              size={52} variant="gradient" mr={24}
              ml={widthSmallerThan700 ? 16 : 0} radius={8}
              gradient={{ from: 'primary.5', to: 'primary.8', deg: 170 }}
            >
              <GiBoatFishing size={24}/>
            </ThemeIcon>
            <Text weight={500} style={{ flex: 1 }} mr={widthSmallerThan700 ? 16 : 0}>
              Keep track of your most successful locations
            </Text>
          </div>
          <div className='frac' style={{ marginTop: 24 }}>
            <ThemeIcon  
              size={52} variant="gradient" mr={24}
              ml={widthSmallerThan700 ? 16 : 0} radius={8}
              gradient={{ from: 'primary.5', to: 'primary.7', deg: 170 }}
            >
              <IoIosPeople size={24}/>
            </ThemeIcon>
            <Text weight={500} style={{ flex: 1 }} mr={widthSmallerThan700 ? 16 : 0}>
              Share spots with the community and friends
            </Text>
          </div>
          <div className='frac' style={{ marginTop: 24 }}>
            <ThemeIcon  
              size={52} variant="gradient" mr={24}
              ml={widthSmallerThan700 ? 16 : 0} radius={8}
              gradient={{ from: 'primary.5', to: 'primary.7', deg: 170 }}
            >
              <CgNotes size={24} color={'white'}/>
            </ThemeIcon>
            <Text weight={500} style={{ flex: 1 }} mr={widthSmallerThan700 ? 16 : 0}>
              Read recent reports to help plan your next trip
            </Text>
          </div>
          <div className='frac' style={{ marginTop: 24 }}>
            <ThemeIcon  
              size={52} variant="gradient" mr={24}
              ml={widthSmallerThan700 ? 16 : 0} radius={8}
              gradient={{ from: 'primary.5', to: 'primary.7', deg: 170 }}
            >
              <IoMdImages size={24}/>
            </ThemeIcon>
            <Text weight={500} style={{ flex: 1 }} mr={widthSmallerThan700 ? 16 : 0}>
              View submitted images to get a feel for the area
            </Text>
          </div>
        </div>
      </section>


      <section className={styles.contactSection}>
        <div className={styles.contactSectionLeft}>
          <img src={'/blob.svg'} className={styles.blob} alt={'blob pattern'}/>
          <Title 
            order={1} 
            mt={48} 
            size={48}
            align={widthLargerThan1200 ? 'left' : 'center'}
          >Need to get in contact?</Title>
          <Title 
            order={2} 
            mt={16}
            align={widthLargerThan1200 ? 'left' : 'center'}
          >Submit a message to contact us for the following</Title>
          <List withPadding size={20} style={{ fontWeight: '500'}}>
            <List.Item pt={24} icon={
              <ThemeIcon color="primary.7" size={24} radius="xl">
                <IoChevronForwardCircleOutline size={16}/>
              </ThemeIcon>
            }>Report an in-app problem</List.Item>
            <List.Item pt={16} icon={
              <ThemeIcon color="primary.7" size={24} radius="xl">
                <IoChevronForwardCircleOutline size={16}/>
              </ThemeIcon>
            }>Request assistance with your account</List.Item>
            <List.Item pt={16} icon={
              <ThemeIcon color="primary.7" size={24} radius="xl">
                <IoChevronForwardCircleOutline size={16}/>
              </ThemeIcon>
            }>General questions not addressed in FAQ</List.Item>
          </List>
        </div>
        <div className={styles.contactSectionRight}>
          <Card shadow="sm" p="xl" radius="md" withBorder className={styles.form}>
            <TextInput 
              label='Name' mt={8} inputMode='text' 
              required={true} value={name}
              onChange={e => setName(e.target.value)}
              error={!nameValid && nameTouched}
            />
            <TextInput 
              label='Email' inputMode='email' 
              required={true} value={email} mt={8} 
              onChange={e => setEmail(e.target.value)}
              error={!emailValid && emailTouched}
            />
            <Select mt={8} required={true}
              label='How did you hear about us?' 
              data={['Google', 'Reddit', 'Github', 'Social Media', 'Advertisement', 'From a friend', 'Other']}
              value={reference}
              onChange={e => setReference(e || '')}
              error={!referenceValid && referenceTouched}
            />
            <Textarea 
              label='Message' minRows={8} mt={8} 
              required={true} minLength={25}
              value={body}
              onChange={e => setBody(e.target.value)}
              error={!bodyValid && bodyTouched}
            />
            <Button 
              mt={16} fullWidth variant={'gradient'} 
              disabled={!valid || success} onClick={submitRequest}
              gradient={{ to: 'primary', from: 'secondaryContainer.3', deg: 170 }}
            >Submit</Button>
          </Card>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogoGroup}>
          <Card className={styles.logoCard} shadow='xl' radius={24}>
            <Image 
              src={'https://heron-static.s3.amazonaws.com/heron-logo.png'} 
              layout='fill' alt={'Heron mobile logo'}
            />
          </Card>
          <Stack ml={16}>
            <Title order={widthSmallerThan700 ? 3 : 2}>Heron Mobile</Title>
            <Text weight={500}>Discover your next fishing adventure</Text>
          </Stack>
        </div>
        <div className={styles.footerLinkGroup}>
          <motion.a 
            whileHover={{ scale: 1.1, x: 4, cursor: 'pointer' }} 
            href='https://github.com/jhahn678/Heron-Expo'
            target='_blank'
          >
            <Group className={styles.footerGithub}>
              <FaGithub size={24} color={'#000'}/>
              <Text weight={600}>Github</Text>
            </Group>
          </motion.a>
          <Group>
              <Image src={AppStore} height={54} width={86} alt={'Download on Apple App Store'}/>
              <a href={'https://play.google.com/store/apps/details?id=com.jhahn678.heron'} target={'_blank'} rel='noreferrer'>
                <Image src={PlayStore} height={54} width={98} alt={'Download on Google Play Store'}/>
              </a>
            </Group>
        </div>
      </footer>
      
      
    </div>
  )
}

export default Home
