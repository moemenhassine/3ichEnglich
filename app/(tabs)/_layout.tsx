import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import FullBurgerIcon from '@/assets/icons/svg/tabs/fullBurger';
import FullCommunityIcon from '@/assets/icons/svg/tabs/fullCommunity';
import FullHomeIcon from '@/assets/icons/svg/tabs/fullHome';
import FullLiveIcon from '@/assets/icons/svg/tabs/fullLive';
import FullSpeakingIcon from '@/assets/icons/svg/tabs/fullSpeaking';
import { HapticTab } from '@/components/ui/haptic-tab';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';

export default function TabLayout() {
  const { colors, isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.Tabs.activeText,
        tabBarInactiveTintColor: colors.Tabs.text,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.Tabs.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: Platform.OS === 'ios' ? 88 : 65,
          paddingBottom: Platform.OS === 'ios' ? 25 : 8,
          paddingTop: 8,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 8,
          overflow: 'hidden',
        },
        tabBarIconStyle: {
          marginVertical: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 6,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused, color }) => focused && <Text style={{ color, fontSize: 12, fontWeight: '600' }}>Home</Text>,
          tabBarIcon: ({ focused }) => (
            <FullHomeIcon
              width={32}
              height={32}
              focused={focused}
              gradientStartColor={focused ? "#44DBE5" : "#656565ff"}
              gradientEndColor={focused ? "#FE6665" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="speaking"
        options={{
          tabBarLabel: ({ focused, color }) => focused && <Text style={{ color, fontSize: 12, fontWeight: '600' }}>Speaking</Text>,
          tabBarIcon: ({ focused }) => (
            <FullSpeakingIcon
              width={32}
              height={32}
              focused={focused}
              gradientStartColor={focused ? "#44DBE5" : "#656565ff"}
              gradientEndColor={focused ? "#FE6665" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: ({ focused, color }) => focused && <Text style={{ color, fontSize: 12, fontWeight: '600' }}>Community</Text>,
          tabBarIcon: ({ focused }) => (
            <FullCommunityIcon
              width={32}
              height={32}
              focused={focused}
              gradientStartColor={focused ? "#44DBE5" : "#656565ff"}
              gradientEndColor={focused ? "#FE6665" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12, fontWeight: '600' }}>Live</Text> : null,
          tabBarIcon: ({ focused }) => (
            <FullLiveIcon
              width={32}
              height={32}
              focused={focused}
              gradientStartColor={focused ? "#44DBE5" : "#656565ff"}
              gradientEndColor={focused ? "#FE6665" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12, fontWeight: '600' }}>Menu</Text> : null,
          tabBarIcon: ({ focused }) => (
            <FullBurgerIcon
              width={32}
              height={32}
              focused={focused}
              gradientStartColor={focused ? "#44DBE5" : "#656565ff"}
              gradientEndColor={focused ? "#FE6665" : "#FFFFFF"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
