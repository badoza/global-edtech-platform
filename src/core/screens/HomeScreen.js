import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { config } from '../../tenants/school_a/config'; // Points to our specific school

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: config.colors.background, padding: 16 }}>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: config.colors.primary }}>
          {config.brandName}
        </Text>
      </View>

      {/* Bento Grid Layout */}
      <View style={{ flexDirection: 'column', gap: 16 }}>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <View style={{ flex: 1, backgroundColor: 'white', padding: 20, borderRadius: 24, height: 150 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Attendance</Text>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: config.colors.secondary }}>92%</Text>
          </View>
        </View>
        
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 24, height: 200 }}>
           <Text style={{ fontSize: 18, fontWeight: '600' }}>Latest Video Lecture</Text>
        </View>
      </View>
    </ScrollView>
  );
}
