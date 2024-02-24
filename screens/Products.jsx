import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function Products() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="flex flex-row justify-between m-3 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Ionicons name="chevron-back-circle" size={38} color="orange" />
          </Text>
        </TouchableOpacity>
        <Text className="font-bold text-xl">كريل</Text>
      </View>
      <ImageBackground
        className="h-[250px] "
        source={{
          uri: "https://newsy.elsob7.com/wp-content/uploads/2023/11/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7-%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%81%D8%B1%D9%86.jpg",
        }}
      />
    </ScrollView>
  );
}
