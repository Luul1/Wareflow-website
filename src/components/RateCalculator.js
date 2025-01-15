import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Typography, 
  Box,
  Slider,
  Paper
} from '@mui/material';
import { useState } from 'react';

function RateCalculator({ open, onClose }) {
  const [invoiceAmount, setInvoiceAmount] = useState(10000);
  const [paymentTerms, setPaymentTerms] = useState(30);
  
  const calculateRate = () => {
    // Calculate advance amount (90% of invoice)
    const advance = invoiceAmount * 0.9;
    
    // Base fee for first 30 days (5% of advance)
    const baseFee = advance * 0.05;
    
    // Calculate additional fee for days 31-60
    const extraDays = Math.max(0, paymentTerms - 30);
    const dailyRate = 0.05 / 30; // Convert 5% to daily rate
    const additionalFee = extraDays > 0 ? (advance * dailyRate * extraDays) : 0;
    
    // Total fee is base fee plus any additional fee
    const totalFee = baseFee + additionalFee;
    
    // Calculate net amount (advance minus total fee)
    const net = advance - totalFee;
    
    return {
      fee: totalFee.toFixed(2),
      advance: advance.toFixed(2),
      total: net.toFixed(2),
      baseRate: '5%',
      dailyRate: `${(dailyRate * 100).toFixed(3)}%`,
      extraDays
    };
  };

  const results = calculateRate();

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 2
        }
      }}
    >
      <DialogTitle>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          Calculate Your Rate
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimate your invoice financing rate instantly
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Invoice Amount
          </Typography>
          <TextField
            fullWidth
            value={invoiceAmount}
            onChange={(e) => setInvoiceAmount(Number(e.target.value))}
            type="number"
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
            }}
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Payment Terms
          </Typography>
          <Slider
            value={paymentTerms}
            onChange={(e, newValue) => setPaymentTerms(newValue)}
            min={30}
            max={60}
            step={1}
            marks={[
              { value: 30, label: '30 days' },
              { value: 45, label: '45 days' },
              { value: 60, label: '60 days' }
            ]}
            sx={{ mb: 4 }}
          />

          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              bgcolor: 'rgba(46,125,50,0.05)',
              borderRadius: 2,
              border: '1px solid rgba(46,125,50,0.1)'
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Estimated Rates
            </Typography>
            
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Advance Amount (90%)
                </Typography>
                <Typography variant="h6" color="primary">
                  ${results.advance}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  Base Fee (30 days)
                </Typography>
                <Typography variant="h6" color="primary">
                  5% = ${(results.advance * 0.05).toFixed(2)}
                </Typography>
              </Box>

              {results.extraDays > 0 && (
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Additional Fee (Days {31} to {paymentTerms})
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${(results.fee - (results.advance * 0.05)).toFixed(2)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    ({results.extraDays} days @ {results.dailyRate} per day)
                  </Typography>
                </Box>
              )}

              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Fee
                </Typography>
                <Typography variant="h6" color="primary">
                  ${results.fee}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  Net Amount
                </Typography>
                <Typography variant="h6" color="primary">
                  ${results.total}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="outlined" sx={{ mr: 1 }}>
          Close
        </Button>
        <Button 
          variant="contained"
          onClick={() => window.location.href = '/get-started'}
        >
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RateCalculator; 