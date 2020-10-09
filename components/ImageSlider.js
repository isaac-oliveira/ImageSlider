import React, { useState } from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

import data from "../data";

const { width } = Dimensions.get("window");

const ImageSlider = () => {
  const [page, setPage] = useState(0);

  const onScroll = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const contentWidth = e.nativeEvent.layoutMeasurement.width;
    const value = Math.round(offsetX / contentWidth);

    setPage(value);
  };

  const renderItem = ({ item }) => {
    return <Image style={styles.img} source={item.img} resizeMode="cover" />;
  };

  return (
    <View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.containerIndicator}>
        {
          data.map((item, index) => {
            return <View key={item.id} style={styles.indicator(page === index, data.length)} />
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: width * 0.9,
    height: width * 0.5,
    marginVertical: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
    overflow: "hidden",
    elevation: 5,
    borderRadius: 10,
  },
  img: {
    width: width * 0.9,
    height: width * 0.5,
  },
  containerIndicator: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    paddingVertical: 5,
    width: width * 0.7,
  },
  indicator: (condition, length) => ({
    height: 5,
    width: width * (0.6 / length),
    backgroundColor: condition ? "#000" : "#ccc",
    borderRadius: 10,
  }),
});

export default ImageSlider;
