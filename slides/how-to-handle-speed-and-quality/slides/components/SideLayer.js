import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  layer: {
    width: 200,
    padding: "10px",
    borderRadius: 8,
    border: "1px solid",
    color: "gray",
    marginBottom: 10,
    textAlign: "center",
  },
  selectedLayer: {
    width: 200,
    padding: "10px",
    borderRadius: 8,
    border: "1px solid",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  }
};

/**
 * @param { layers: string[], selectedIndex: number }
 */
export const SideLayer = ({ layers, selectedIndex }) => (
  <div style={styles.container}>
    {layers.map((layer, i) => (
      <div key={layer} style={i === selectedIndex ? styles.selectedLayer : styles.layer}>{layer}</div>
    ))}
  </div>
);
