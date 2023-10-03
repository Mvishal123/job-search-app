import { Text, SafeAreaView, ScrollView, View} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { useRouter, Stack } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Welcome />
          <Nearbyjobs />
          <Popularjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
