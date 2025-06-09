import wx


class WxLabeledSlider(wx.Panel):
    """A simple labeled slider widget for wxPython."""

    def __init__(self, parent: wx.Window) -> None:
        super().__init__(parent)

        self.label = wx.StaticText(self)
        self.slider = wx.Slider(self, style=wx.HORIZONTAL)

        sizer = wx.BoxSizer(wx.HORIZONTAL)
        sizer.Add(self.label, 0, wx.ALIGN_CENTER_VERTICAL | wx.RIGHT, 5)
        sizer.Add(self.slider, 1, wx.EXPAND)
        self.SetSizer(sizer)

    def setRange(self, min_val: int, max_val: int) -> None:
        self.slider.SetMin(min_val)
        self.slider.SetMax(max_val)

    def setValue(self, value: int) -> None:
        self.slider.SetValue(value)

    def value(self) -> int:
        return self.slider.GetValue()  # type: ignore [no-any-return]

    def setSingleStep(self, step: int) -> None:
        self.slider.SetLineSize(step)


class WxSliderWithReducer(wx.Panel):
    """A slider widget with an associated reducer dropdown."""

    def __init__(self, parent: wx.Window, axis: str) -> None:
        super().__init__(parent)

        # Common reducer options
        self.REDUCER_OPTIONS = [
            ("None", None),
            ("max", "numpy.max"),
            ("mean", "numpy.mean"),
            ("min", "numpy.min"),
            ("sum", "numpy.sum"),
            ("std", "numpy.std"),
        ]

        # Store axis name
        self.axis = axis

        # Create labeled slider
        self.labeled_slider = WxLabeledSlider(self)
        self.labeled_slider.label.SetLabel(str(axis))

        # Create reducer dropdown
        self.reducer_combo = wx.ComboBox(
            self,
            choices=[option[0] for option in self.REDUCER_OPTIONS],
            style=wx.CB_READONLY,
            size=(70, -1),
        )
        self.reducer_combo.SetSelection(0)  # Default to "None"

        # Layout
        sizer = wx.BoxSizer(wx.HORIZONTAL)
        sizer.Add(self.labeled_slider, 1, wx.EXPAND | wx.RIGHT, 5)
        sizer.Add(self.reducer_combo, 0, wx.ALIGN_CENTER_VERTICAL)
        self.SetSizer(sizer)

    def get_reducer(self) -> str | None:
        """Get the currently selected reducer."""
        selection = self.reducer_combo.GetSelection()
        if selection >= 0 and selection < len(self.REDUCER_OPTIONS):
            return self.REDUCER_OPTIONS[selection][1]
        return None

    def set_reducer(self, reducer: str | None) -> None:
        """Set the reducer selection."""
        for i, (_label, value) in enumerate(self.REDUCER_OPTIONS):
            if value == reducer:
                self.reducer_combo.SetSelection(i)
                return
        # Default to None if not found
        self.reducer_combo.SetSelection(0)

    # Proxy methods for slider functionality
    def setRange(self, min_val: int, max_val: int) -> None:
        self.labeled_slider.setRange(min_val, max_val)

    def setValue(self, value: int) -> None:
        self.labeled_slider.setValue(value)

    def value(self) -> int:
        return self.labeled_slider.value()

    def setSingleStep(self, step: int) -> None:
        self.labeled_slider.setSingleStep(step)
