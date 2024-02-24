import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const dammyDate = [
    {
      id: 1,
      title: "قلايات بطاطا",
      img: "https://yummy.awicdn.com/site-images/sites/default/files/prod/recipe/6/f/555181/5a2bd372cfa9e7bd703570d28ba0c46be99a3871-230123185458.jpg?preset=v3.0_1200xDYN&save-png=1&rnd=1519151RND220215",
    },
    {
      id: 2,
      title: "كريل",
      img: "https://modo3.com/thumbs/fit630x300/60422/1597319268/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B7%D8%A8%D8%AE_%D9%84%D8%AD%D9%85_%D8%A7%D9%84%D8%A8%D9%82%D8%B1.jpg",
    },
    {
      id: 3,
      title: "غازات كهرباء",
      img: "https://png.pngtree.com/background/20230528/original/pngtree-an-arrangement-of-various-indian-food-picture-image_2778221.jpg",
    },
    {
      id: 4,
      title: "غازات عادية",
      img: "https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg",
    },
    {
      id: 5,
      title: "غاز تحت فرن",
      img: "https://st4.depositphotos.com/1000589/30118/i/450/depositphotos_301181378-stock-photo-assorted-indian-food-on-black.jpg",
    },
    {
      id: 6,
      title: "غازات ارضية",
      img: "https://www.shutterstock.com/image-photo/indian-ethnic-food-buffet-on-260nw-2112379988.jpg",
    },
    {
      id: 7,
      title: "شوايات شاورما",
      img: "https://alwafd.news/images/images/unnamed(509).jpg",
    },
    {
      id: 8,
      title: "شوايات فروج",
      img: "https://egymenu.egyweb.info/images/meals/1589722351-eq6ylzglze.jpeg",
    },
    {
      id: 9,
      title: "افران بيتزا",
      img: "https://static.webteb.net/images/content/ramadanrecipe_recipe_1284_773ece53751-3e01-4836-a67f-685c85a83534.jpg",
    },
    {
      id: 10,
      title: "افران بخار",
      img: "https://images.samsung.com/is/image/samsung/p6pim/iq_ar/feature/164488809/iq_ar-feature-ovens-535975810?$FB_TYPE_A_MO_JPG$",
    },
    {
      id: 11,
      title: "برادات سلطة",
      img: "https://damaskmart.com/cdn/shop/products/PHOTO-2022-05-08-21-38-502_1024x1024.jpg?v=1652124523",
    },
  ];
  const navigation = useNavigation();
  return (
    <View className="cards px-4 mt-4 flex ">
      {dammyDate.map((ele) => {
        return (
          <React.Fragment key={ele.id}>
            <TouchableOpacity onPress={() => navigation.navigate("Products")}>
              <ImageBackground
                className="rounded-3xl overflow-hidden p-1 my-2 "
                source={{
                  uri: ele.img,
                }}
                style={{
                  overlayColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <View
                  style={{}}
                  className="h-[200px] flex items-center justify-center"
                >
                  <View
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      width: "100%",
                      paddingY: 3,
                      fontSize: "xl",
                    }}
                  >
                    <Text className="text-center  text-3xl opacity-100 text-white font-bold">
                      {ele.title}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Products")}
                >
                  <View className=" flex items-center ">
                    <Text className="bg-orange-500 px-6 py-2 font-extrabold text-lg text-white">
                      شاهد جميع المنتجات
                    </Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          </React.Fragment>
        );
      })}
    </View>
  );
}
