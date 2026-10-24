import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { MenuView } from "@expo/ui/community/menu";

const TITLES = [
  "Quarterly planning notes and follow-ups from the product design review meeting",
  "A longer headline that should wrap onto multiple lines instead of being clipped by the row",
  "Release checklist for the mobile application, including signing and store metadata",
  "Team offsite agenda, travel details, and the list of topics we still need to cover",
];

const ACTIONS = [
  { id: "open", title: "Open" },
  { id: "share", title: "Share" },
];

function Row({ title }: { title: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AB</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Tap to open · long-press for actions</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </View>
  );
}

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.heading}>MenuView rotation repro</Text>
        <Text style={styles.hint}>
          {`${Math.round(width)} × ${Math.round(height)}. Rotate portrait ↔ landscape. `}
          The MenuView rows should update their width and height exactly like the
          plain React Native rows below them.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.section}>MenuView (affected)</Text>
        {TITLES.map((title, index) => (
          <MenuView
            key={`menu-${index}`}
            actions={ACTIONS}
            onPressAction={() => {}}
            shouldOpenOnLongPress
          >
            <Row title={title} />
          </MenuView>
        ))}

        <Text style={styles.section}>Plain React Native (reference)</Text>
        {TITLES.map((title, index) => (
          <Row key={`plain-${index}`} title={title} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 4,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  hint: {
    fontSize: 13,
    lineHeight: 18,
    color: "#555",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  section: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#888",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#4a6fa5",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#777",
  },
  chevron: {
    fontSize: 26,
    lineHeight: 26,
    color: "#999",
  },
});
