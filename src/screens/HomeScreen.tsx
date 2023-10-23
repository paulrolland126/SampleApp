import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * @description
 * 1. read the data from assets/list.json
 * 2. list the items on HomeScreen
 * 3. on the top of the list there should be text indicating number of items "Items: NUMBER"
 * 4. add feature to add item to the list
 * 5. user should be able to edit item name by long press on the item in the list 
 * - while editing the item, hit to return keyboard key should udpate the item name
 * - on exiting textinput changes should be cancelled
 * 6. implement DetailedView
 * - edit name
 * - button to cancel changes
 * - button to submit, after updating the name ir should go navigate user back to the list
 */
const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/**
       * place for your creativity
       */}
    </SafeAreaView>
  );
};

export default HomeScreen;
