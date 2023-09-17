import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
      containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>slide1</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>slide2</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>slide3</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
