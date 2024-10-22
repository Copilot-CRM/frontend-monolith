import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock the date to a fixed value
vi.useFakeTimers();
vi.setSystemTime(new Date("2023-01-01T12:00:00Z"));

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;
