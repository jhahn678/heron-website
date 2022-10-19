import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Heron</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
        fontFamily: 'Montserrat, sans-serif',
          colors: {
            'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
            'primary': ["#B8EBFF","#8ADFFF","#5CD2FF","#2EC6FF","#00B9FF","#0094CC","#006F99","#004A66","#002533","#E5F8FF"],
            'secondary': ["#F0F3F4","#D5DDE1","#BBC7CE","#A0B0BB","#859AA8","#6A8495","#556A77","#404F59","#2B353B","#151A1E"],
            'primaryContainer': ["#E5F5FF","#B8E2FF","#8ACFFF","#5CBDFF","#2EAAFF","#0097FF","#0079CC","#005B99","#003D66","#001E33"],
            'secondaryContainer': ["#EAF3FA","#C5DEF1","#A0C9E8","#7BB5E0","#56A0D7","#318BCE","#276FA5","#1E537B","#143752","#0A1C29"]
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}