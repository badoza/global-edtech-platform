import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { config } from '../../tenants/school_a/config';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.schoolName}>{config.brandName}</Text>
        <Text style={styles.greeting}>Welcome back, Student</Text>
      </View>

      {/* Premium Bento Grid */}
      <View style={styles.grid}>
        
        {/* Top Row: 2 Columns */}
        <View style={styles.row}>
          <TouchableOpacity style={}>
            <Text style={styles.bentoTitle}>Attendance</Text>
            <Text style={}>94%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={}>
            <Text style={}>Next Class</Text>
            <Text style={}>10:00 AM - Physics</Text>
          </TouchableOpacity>
        </View>

        {/* Middle Row: Hero Video Section */}
        <TouchableOpacity style={}>
          <Text style={styles.bentoTitle}>Latest Lecture</Text>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.playButton}>▶ Play Video</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Row: Syllabus & Notices */}
        <TouchableOpacity style={styles.bentoBox}>
          <Text style={styles.bentoTitle}>Notices & Syllabus</Text>
          <Text style={styles.bentoSubtitle}>Tap to view 3 new updates</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 16 },
  header: { marginBottom: 24, marginTop: 40 },
  schoolName: { fontSize: 28, fontWeight: '800', color: '#1A1A40', letterSpacing: -0.5 },
  greeting: { fontSize: 16, color: '#64748B', marginTop: 4 },
  grid: { gap: 16 },
  row: { flexDirection: 'row', gap: 16 },
  flex1: { flex: 1 },
  bentoBox: { 
    backgroundColor: '#FFFFFF', 
    padding: 20, 
    borderRadius: 24, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 12,
    elevation: 2,
    justifyContent: 'space-between',
    minHeight: 140
  },
  heroBox: { minHeight: 220 },
  bentoTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  bentoSubtitle: { fontSize: 14, color: '#64748B', marginTop: 8 },
  bentoData: { fontSize: 36, fontWeight: '900', marginTop: 12 },
  videoPlaceholder: { flex: 1, backgroundColor: '#F1F5F9', borderRadius: 16, marginTop: 12, justifyContent: 'center', alignItems: 'center' },
  playButton: { color: '#64748B', fontWeight: '600' }
});
