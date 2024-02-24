import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Categories from "../components/Categories";
export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ScrollView className="bg-white">
      <StatusBar />
      <View className="header">
        <View className="mx-5 my-2 flex flex-row justify-between items-center ">
          <Text className="text-3xl font-bold">Lion</Text>
          <View>
            <Text>
              <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
                <Entypo name="menu" size={42} color="orange" />
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {showMenu && (
          <View className="h-[100vh] bg-red-400">
            <Text>1</Text>
          </View>
        )}
      </View>
      <Categories />
    </ScrollView>
  );
}
