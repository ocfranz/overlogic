import React, { Component, useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styles from './styles';

const SimpleModal = ({modalVisible}) => {
  return (
   
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
 
  );
};

export default SimpleModal