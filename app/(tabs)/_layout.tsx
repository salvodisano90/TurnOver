// app/(tabs)/_layout.tsx — bottom tab navigator

import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.separator,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Turni', tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="copertura"
        options={{ title: 'Copertura', tabBarIcon: ({ color, size }) => <Ionicons name="pulse" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="personale"
        options={{ title: 'Staff', tabBarIcon: ({ color, size }) => <Ionicons name="people" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="reparti"
        options={{ title: 'Reparti', tabBarIcon: ({ color, size }) => <Ionicons name="business" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="report"
        options={{ title: 'Report', tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} /> }}
      />
    </Tabs>
  );
}
