# Makefile for Nexus Hugo Theme
# Simplifies starting and stopping the Hugo server

# Variables
PORT = 1313
HUGO_ARGS = --port $(PORT) --bind=0.0.0.0 --buildDrafts --disableFastRender --ignoreCache --forceSyncStatic

.PHONY: start stop restart status help

# Start the Hugo server on port 1313 with dynamic CSS processing
start:
	@echo "Starting Hugo server with dynamic CSS processing on port $(PORT)..."
	@hugo server $(HUGO_ARGS)

# Stop the Hugo server by killing the process using port 1313
stop:
	@echo "Stopping Hugo server on port $(PORT)..."
	@lsof -i :$(PORT) -t | xargs kill -9 2>/dev/null || echo "No Hugo server running on port $(PORT)"

# Restart the Hugo server (stop and start)
restart: stop start

# Show status of Hugo server
status:
	@if lsof -i :$(PORT) -t >/dev/null 2>&1; then \
		echo "Hugo server is running on port $(PORT)"; \
		lsof -i :$(PORT); \
	else \
		echo "No Hugo server running on port $(PORT)"; \
	fi

# Show help information
help:
	@echo "Nexus Hugo Theme Makefile"
	@echo ""
	@echo "Usage:"
	@echo "  make start    - Start Hugo server on port $(PORT)"
	@echo "  make stop     - Stop Hugo server running on port $(PORT)"
	@echo "  make restart  - Restart Hugo server (stop and start)"
	@echo "  make status   - Check if Hugo server is running"
	@echo "  make help     - Show this help message"

# Default target
default: help
