/* eslint-disable prettier/prettier */
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {  webRenderEngine, mobileRenderEngine } from 'jsontojsx';
import { webRenderEngine, mobileRenderEngine } from './src/renderEngine';

function App() {
  const testConfig = {
    children: [
      {
        type: 'div',
        styles: {
          backgroundColor: '#FAFAFA',
        },
        children: [
          {
            type: 'div',
            styles: {
              backgroundColor: '#FFFFFF',
              margin: 4,
              padding: 4,
              borderRadius: 4,
            },
            children: [
              {
                type: 'h6',
                styles: {
                  fontWeight: '400',
                },
                children: [
                  {
                    type: 'Text',
                    content: 'Indianapolis selected to host NBA All-Star 2021',
                  },
                ],
              },
              {
                type: 'h6',
                styles: {
                  paddingTop: 2,
                  paddingBottom: 4,
                  fontWeight: '300',
                },
                children: [
                  {
                    type: 'Text',
                    content: 'The 70th NBA All-Star Game will take place on Feb. 14, 2021',
                  },
                ],
              },
              {
                type: 'img',
                styles: {
                  paddingTop: 8,
                  borderRadius: 4,
                  width: '100%',
                  height: 'auto'
                },
                src: 'https://cdn-us1.staffbase.com/production/image/upload/c_blurpad,w_1000,h_563,b_rgb:ffffff/v1513267967/Gf9OQfjMlHwzzMbZTrSPmWroZNQYt65b5Cll78bk0FhxI35s0aKOJwSOcCO3DDBaAfvM2iUAr09MnRipbBzMFFKIJH5kN9Y1tAFMOsJcKBHeZXuQk9atXV4Ybdn0WoDjkKuF3lGbc5AEg1Tnep0zU88iRyRTu1AT89a7a1JN80CRCts7yt4kuZWhmNNbTqd8/u59e909dee4b0a0cebc9ed619/nba-all-star-2021-indy.jpeg',
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: 'INDIANAPOLIS -- The NBA announced today that Indianapolis has been selected to host NBA All-Star 2021.  The 70th NBA All-Star Game will take place at Bankers Life Fieldhouse, home of the Indiana Pacers, on Sunday, Feb. 14, 2021.  This will mark the second NBA All-Star in Indianapolis, which hosted the midseason classic in 1985.',
                  },
                ],
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: 'NBA Commissioner Adam Silver made the announcement during a press conference at Bankers Life Fieldhouse.  He was joined by Indiana Gov. Eric J. Holcomb and Indianapolis Mayor Joe Hogsett as well as Pacers Sports & Entertainment owner Herb Simon, President and Chief Operating Officer Rick Fuson and President of Basketball Operations Kevin Pritchard.',
                  },

                ],
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: '“Indianapolis has an enduring love for basketball that creates a special connection to our All-Star Game,” said Silver.  “I want to especially thank Herb Simon for his efforts to bring the All-Star festivities back to Indianapolis as well as acknowledge the strong support we received from Governor Holcomb, Mayor Hogsett, Larry Bird, Rick Fuson and the entire Pacers organization.”',
                  },

                ]
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: 'Indianapolis will follow Los Angeles in 2018, Charlotte in 2019 and Chicago in 2020 as All-Star host.  The NBA All-Star Game will be played at Bankers Life Fieldhouse for the first time. ',
                  },

                ]
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: '“On behalf of all of us at Pacers Sports & Entertainment, I am delighted that the NBA is entrusting us with NBA All-Star 2021 and we look forward to putting on a week of events that highlights the city that I love and meets the league’s expectations,” said Simon.',
                  },

                ]
              },
              {
                type: 'p',
                styles: {
                  paddingTop: 4,
                },
                children: [
                  {
                    type: 'Text',
                    content: '“We are thrilled with the NBA’s decision to bring its showcase event, the NBA All-Star Game, to Indianapolis in 2021,” said Holcomb.  “No state nurtures and loves the game of basketball more than Indiana, and I am certain that my fellow Hoosiers will embrace the game and related events with uncommon passion and support.”',
                  },

                ]
              },
            ]
          },
        ]
      },

    ]
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{}}>
          {Platform.OS === 'web' && webRenderEngine(testConfig)}
          {(Platform.OS === 'ios' || Platform.OS === 'android') && mobileRenderEngine(testConfig)}
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;






